"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const router = express.Router();
exports.router = router;
const { getStudentByName, getStudentById, updateStudentProfile, } = require("../repository/studentRepo.js");
const { createStudentCards, createStudentProfile, } = require("../models/studentModel.js");
router.route("/").get((req, res) => {
    let a = [];
    res.send(a);
});
router.route("/:name").get((req, res) => {
    console.log('/api/classManager/students/:name hit');
    getStudentByName(req.params.name)
        .then((data) => {
        console.log("got student");
        res.json(createStudentCards(data));
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
router
    .route("/profile/:id")
    .get((req, res) => {
    getStudentById(req.params.id)
        .then((data) => {
        console.log(createStudentProfile(data));
        res.json(createStudentProfile(data));
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
})
    .put((req, res) => {
    console.log("student data below");
    console.log(req.body);
    updateStudentProfile(req.body.name, req.body.status, req.body.id, req.body.city, req.body.level, req.body.frequency, req.body.description, req.body.birthday);
    res.sendStatus(200);
});
module.exports = router;
//tsc --module commonjs ./api/routes/student.ts
