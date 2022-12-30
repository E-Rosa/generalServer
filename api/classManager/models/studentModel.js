"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnStudentProfileModelFromPg = exports.returnStudentCardModelsFromPg = exports.StudentProfileModelFrontEnd = exports.StudentProfileModel = exports.StudentCardModel = void 0;
const modelParser_1 = require("./modelParser");
class StudentCardModel {
    constructor(name = "", status = "", id = "") {
        this.name = name;
        this.status = status;
        this.id = id;
    }
}
exports.StudentCardModel = StudentCardModel;
class StudentProfileModel {
    constructor(constructor1 = undefined, name = "", status = "", id = "", birthday = "", city = "", level = "", subscription = new Date(), frequency = "", description = "", teacher_name = "", teacher_id = "", credits = 0, frontEnd = new StudentProfileModelFrontEnd()) {
        let modelParser = new modelParser_1.ModelParser();
        if (constructor1 != undefined) {
            this.name = constructor1.name;
            this.status = constructor1.status;
            this.id = constructor1.id;
            this.birthday = constructor1.birthday;
            this.city = constructor1.city;
            this.level = constructor1.level;
            this.subscription = constructor1.subscription;
            this.frequency = constructor1.frequency;
            this.description = constructor1.description;
            this.teacher_name = constructor1.teacher_name;
            this.teacher_id = constructor1.teacher_id;
            this.credits = constructor1.credits;
            this.frontEnd = constructor1.frontEnd;
            this.frontEnd.subscriptionString = modelParser.parseDateToString(new Date(constructor1.subscription));
        }
        else {
            this.name = name;
            this.status = status;
            this.id = id;
            this.birthday = birthday;
            this.city = city;
            this.level = level;
            this.subscription = subscription;
            this.frequency = frequency;
            this.description = description;
            this.teacher_name = teacher_name;
            this.teacher_id = teacher_id;
            this.credits = credits;
            this.frontEnd = frontEnd;
            this.frontEnd.subscriptionString = modelParser.parseDateToString(subscription);
        }
    }
}
exports.StudentProfileModel = StudentProfileModel;
class StudentProfileModelFrontEnd {
    constructor(subscriptionString = "") {
        this.subscriptionString = subscriptionString;
    }
}
exports.StudentProfileModelFrontEnd = StudentProfileModelFrontEnd;
function returnStudentCardModelsFromPg(data) {
    let a = [];
    if (data.rows[0] != undefined) {
        for (let i = 0; i < data.rows.length; i++) {
            let name = data.rows[i].student_name;
            let status = data.rows[i].student_status;
            let id = data.rows[i].student_id;
            let card = new StudentCardModel(name, status, id);
            a.push(card);
        }
        return a;
    }
    else {
        return [new StudentCardModel()];
    }
}
exports.returnStudentCardModelsFromPg = returnStudentCardModelsFromPg;
function returnStudentProfileModelFromPg(data) {
    let a = [];
    if (data.rows[0] != undefined) {
        for (let i = 0; i < data.rows.length; i++) {
            let card = new StudentProfileModel(data.rows[i]);
            a.push(card);
        }
        return a;
    }
    else {
        return [new StudentProfileModel()];
    }
}
exports.returnStudentProfileModelFromPg = returnStudentProfileModelFromPg;
//tsc --module commonjs ./api/models/studentModel.ts
