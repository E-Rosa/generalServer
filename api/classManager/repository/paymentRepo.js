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
exports.PaymentRepository = void 0;
const dbConnection_1 = require("../configurations/dbConnection");
class PaymentRepository {
    getAllPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dbConnection_1.client.query("SELECT * FROM payments");
        });
    }
    getPaymentsByStudentId(studentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dbConnection_1.client.query("SELECT * FROM payments WHERE payment_student_id=$1", [
                studentId,
            ]);
        });
    }
    insertPayment(payment, teacher_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dbConnection_1.client.query("INSERT INTO payments (payment_id, payment_teacher_id, payment_student_id, payment_date, payment_value, payment_status) VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5)", [
                teacher_id,
                payment.student_id,
                payment.date,
                payment.value,
                payment.status
            ]);
        });
    }
    updatePayment(payment) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dbConnection_1.client.query("UPDATE payments SET payment_date=$2, payment_value=$3, payment_status=$4 WHERE payment_id=$1", [payment.id, payment.date, payment.value, payment.status]);
        });
    }
    deletePaymentById(paymentId) {
        return dbConnection_1.client.query("DELETE FROM payments WHERE payment_id=$1", [paymentId]);
    }
}
exports.PaymentRepository = PaymentRepository;
