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
const express_1 = require("express");
const paymentModel_1 = require("../models/paymentModel");
const paymentRepo_1 = require("../repository/paymentRepo");
const teacherRepo_1 = require("../repository/teacherRepo");
const studentRepo_1 = require("../repository/studentRepo");
const router = (0, express_1.Router)();
const paymentRepository = new paymentRepo_1.PaymentRepository();
const paymentModel = new paymentModel_1.PaymentModel();
router
    .route("/:studentId")
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryResult = yield paymentRepository.getPaymentsByStudentId(req.params.studentId);
        const teacherName = yield (0, teacherRepo_1.getTeacherNameById)(queryResult.rows[0].payment_teacher_id);
        const studentName = yield (0, studentRepo_1.getStudentNameById)(queryResult.rows[0].payment_student_id);
        if (queryResult.rows[0] != undefined) {
            let paymentModelInstances = paymentModel.returnInstancesFromPg(queryResult);
            (0, paymentModel_1.prepareInstancesForFrontEnd)(paymentModelInstances, teacherName, studentName);
            res.json(paymentModelInstances);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (_a) {
        console.log("error");
        res.sendStatus(500);
    }
}))
    .put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body[0] != undefined) {
        try {
            let paymentInstances = req.body.map((payment) => {
                return new paymentModel_1.PaymentModel(payment);
            });
            for (let i = 0; i < paymentInstances.length; i++) {
                yield paymentRepository.updatePayment(paymentInstances[i]);
            }
            res.sendStatus(200);
        }
        catch (_b) {
            console.log("didnt update payment");
            res.sendStatus(500);
        }
    }
    else {
        res.sendStatus(404);
    }
}));
router.route("/").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("POST /api/classManager/payments/:paymentId was hit");
    if (req.body[0] != undefined) {
        try {
            let paymentReceived = new paymentModel_1.PaymentModel(req.body[0]);
            let teacherId = yield (0, teacherRepo_1.getTeacherIdByName)("Elias Rosa");
            yield paymentRepository.insertPayment(paymentReceived, teacherId);
            res.sendStatus(200);
        }
        catch (_c) {
            console.log("didnt insert student");
            res.sendStatus(400);
        }
    }
}));
module.exports = router;
