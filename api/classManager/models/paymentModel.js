"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareInstancesForFrontEnd = exports.PaymentModelFrontEnd = exports.PaymentModel = void 0;
const modelParser_1 = require("./modelParser");
class PaymentModel {
    constructor(constructor1 = undefined, id = "", teacher_id = "", student_id = "", date = new Date(), value = 1, status = "", frontEnd = new PaymentModelFrontEnd()) {
        let modelParser = new modelParser_1.ModelParser();
        if (constructor1 != undefined) {
            this.id = constructor1.id;
            this.teacher_id = constructor1.teacher_id;
            this.student_id = constructor1.student_id;
            this.date = constructor1.date;
            this.value = constructor1.value;
            this.status = constructor1.status;
            if (constructor1.frontEnd) {
                this.frontEnd = constructor1.frontEnd;
                this.frontEnd.dateString = modelParser.parseDateToString(date);
            }
            else {
                this.frontEnd = frontEnd;
                this.frontEnd.dateString = modelParser.parseDateToString(date);
            }
        }
        else {
            this.id = id;
            this.teacher_id = teacher_id;
            this.student_id = student_id;
            this.date = date;
            this.value = value;
            this.status = status;
            this.frontEnd = frontEnd;
            this.frontEnd.dateString = modelParser.parseDateToString(date);
        }
    }
    getCredits(classPrice) {
        return Math.ceil(classPrice / this.value);
    }
    returnInstancesFromPg(data) {
        let a = [];
        data.rows.forEach((dataInstance) => {
            a.push(new PaymentModel(undefined, dataInstance.payment_id, dataInstance.payment_student_id, dataInstance.payment_student_id, dataInstance.payment_date, dataInstance.payment_value, dataInstance.payment_status));
        });
        return a;
    }
}
exports.PaymentModel = PaymentModel;
class PaymentModelFrontEnd {
    constructor(teacher_name = "", student_name = "", dateString = "") {
        this.teacher_name = teacher_name;
        this.student_name = student_name;
        this.dateString = dateString;
    }
}
exports.PaymentModelFrontEnd = PaymentModelFrontEnd;
function prepareInstancesForFrontEnd(data, teacherName, studentName) {
    data.forEach((instance) => {
        instance.frontEnd = new PaymentModelFrontEnd(teacherName, studentName, instance.frontEnd.dateString);
    });
}
exports.prepareInstancesForFrontEnd = prepareInstancesForFrontEnd;
