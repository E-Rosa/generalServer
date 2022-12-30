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
const studentModel_1 = require("../models/studentModel");
const express = require("express");
const router = express.Router();
exports.router = router;
const { getStudentByName, getStudentById, updateStudent, deleteStudentById, insertStudent, } = require("../repository/studentRepo.js");
const { returnStudentCardModelsFromPg, } = require("../models/studentModel.js");
const { deleteClassesByStudentId } = require("../repository/classesRepo");
router.route("/").get((req, res) => {
    let a = [];
    res.send(a);
});
router.route("/:name").get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataFromQuery = yield getStudentByName(req.params.name);
        const StudentCardModels = returnStudentCardModelsFromPg(dataFromQuery);
        res.json(StudentCardModels);
        console.log("StudentCardModels sent.");
    }
    catch (_a) {
        res.sendStatus(400);
    }
}));
router
    .route("/profile/:id")
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getStudentQueryResult = yield getStudentById(req.params.id);
        res.json(new studentModel_1.StudentProfileModel(undefined, getStudentQueryResult.rows[0].student_name, getStudentQueryResult.rows[0].student_status, getStudentQueryResult.rows[0].student_id, getStudentQueryResult.rows[0].student_birthday, getStudentQueryResult.rows[0].student_city, getStudentQueryResult.rows[0].student_level, getStudentQueryResult.rows[0].student_subscription_date, getStudentQueryResult.rows[0].student_frequency, getStudentQueryResult.rows[0].student_description, getStudentQueryResult.rows[0].teacher_name, getStudentQueryResult.rows[0].teacher_id, getStudentQueryResult.rows[0].credits, new studentModel_1.StudentProfileModelFrontEnd()));
    }
    catch (_b) {
        res.sendStatus(400);
    }
}))
    .put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield updateStudent(req.body);
        res.sendStatus(200);
    }
    catch (_c) {
        res.sendStatus(400);
    }
}))
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteClassesQuery = yield deleteClassesByStudentId(req.params.id);
        const deleteProfileQuery = yield deleteStudentById(req.params.id);
        console.log('deleted ', req.params.id);
        res.sendStatus(200);
    }
    catch (_d) {
        res.sendStatus(400);
    }
}));
router.route("/add").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let receivedStudentProfile = req.body;
    try {
        yield insertStudent(receivedStudentProfile.name, receivedStudentProfile.status, receivedStudentProfile.description, receivedStudentProfile.city, receivedStudentProfile.frequency, receivedStudentProfile.level, receivedStudentProfile.subscription);
        res.sendStatus(200);
    }
    catch (_e) {
        res.sendStatus(500);
    }
}));
module.exports = router;
//tsc --module commonjs ./api/routes/student.ts
