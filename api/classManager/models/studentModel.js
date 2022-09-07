"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudentProfile = exports.createStudentCards = exports.StudentProfile = exports.StudentCard = void 0;
class StudentCard {
    constructor(name, status, id) {
        this.name = name;
        this.status = status;
        this.id = id;
    }
}
exports.StudentCard = StudentCard;
class StudentProfile {
    constructor(name, status, id, birthday, city, level, subscription, frequency, description, teacher_name, teacher_id) {
        this.name = name;
        this.status = status;
        this.id = id;
        this.birthday = birthday.toString().split("").slice(0, 15).join("");
        this.city = city;
        this.level = level;
        this.subscription = subscription.toString().split("").slice(0, 15).join("");
        this.frequency = frequency;
        this.description = description;
        this.teacher_name = teacher_name;
        this.teacher_id = teacher_id;
    }
}
exports.StudentProfile = StudentProfile;
function createStudentCards(data) {
    let a = [];
    if (data.rows[0] != undefined) {
        for (let i = 0; i < data.rows.length; i++) {
            let name = data.rows[i].student_name;
            let status = data.rows[i].student_status;
            let id = data.rows[i].student_id;
            let card = new StudentCard(name, status, id);
            a.push(card);
        }
    }
    return a;
}
exports.createStudentCards = createStudentCards;
function createStudentProfile(data) {
    let a = [];
    if (data.rows[0] != undefined) {
        for (let i = 0; i < data.rows.length; i++) {
            let name = data.rows[i].student_name;
            let status = data.rows[i].student_status;
            let id = data.rows[i].student_id;
            let birthday = data.rows[i].student_birthday;
            let city = data.rows[i].student_city;
            let subscription = data.rows[i].student_subscription_date;
            let frequency = data.rows[i].student_frequency;
            let description = data.rows[i].student_description;
            let teacher_name = data.rows[i].teacher_name;
            let teacher_id = data.rows[i].teacher_id;
            let level = data.rows[i].student_level;
            let card = new StudentProfile(name, status, id, birthday, city, level, subscription, frequency, description, teacher_name, teacher_id);
            a.push(card);
        }
        return a;
    }
    else {
        return null;
    }
}
exports.createStudentProfile = createStudentProfile;
//tsc --module commonjs ./api/models/studentModel.ts
