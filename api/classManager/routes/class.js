"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const classModel_js_1 = require("../models/classModel.js");
const modelParser_js_1 = require("../models/modelParser.js");
const classesRepo_js_1 = require("../repository/classesRepo.js");
const studentRepo_js_1 = require("../repository/studentRepo.js");
const express = require("express");
const router = express.Router();
exports.router = router;
router
    .route("/:id")
    .get((req, res) => {
    if (req.params.id) {
        (0, classesRepo_js_1.getAllClassesById)(req.params.id).then((data) => {
            res.send((0, classModel_js_1.returnClassesFromPg)(data));
        });
    }
    else {
        res.sendStatus(500).send("You must provide an id.");
    }
})
    .put((req, res) => {
    let instances = req.body.map((aClass) => {
        return new classModel_js_1.ClassModel(aClass);
    });
    instances.forEach((instance) => {
        (0, classesRepo_js_1.insertClass)(instance);
    });
    res.sendStatus(200);
})
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body[0] != undefined) {
            let receivedClass = new classModel_js_1.ClassModel(req.body[0]);
            const studentCredits = yield (0, studentRepo_js_1.getStudentCreditsByStudentName)(receivedClass.student_name);
            if (studentCredits != 0) {
                if (receivedClass.frontEnd.repeat) {
                    let modelParser = new modelParser_js_1.ModelParser();
                    let classDatesArray = modelParser.generateDatesArray(receivedClass.frontEnd.dateString, receivedClass.frontEnd.repeat);
                    classDatesArray.forEach((classDate) => {
                        let newClass = new classModel_js_1.ClassModel(undefined, receivedClass.teacher_name, receivedClass.student_name, receivedClass.title, receivedClass.description, classDate, receivedClass.duration, receivedClass.status, receivedClass.grade, receivedClass.time, "", "", new classModel_js_1.ClassModelFrontEnd());
                        (0, classesRepo_js_1.insertClass)(newClass);
                    });
                }
                else {
                    (0, classesRepo_js_1.insertClass)(receivedClass);
                }
                res.sendStatus(200);
            }
            else {
                res.sendStatus(403);
            }
        }
    }
    catch (_a) {
        res.sendStatus(500);
    }
}))
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, classesRepo_js_1.deleteClassById)(req.params.id);
        res.sendStatus(200);
    }
    catch (_b) {
        res.sendStatus(400);
    }
}));
module.exports = router;
