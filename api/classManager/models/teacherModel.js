"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherProfile = exports.returnTeacherProfileFromPg = void 0;
class TeacherProfile {
    constructor(name = '', id = '', city = '', level = '') {
        this.name = name;
        this.id = id;
        this.city = city;
        this.level = level;
    }
}
exports.TeacherProfile = TeacherProfile;
function returnTeacherProfileFromPg(data) {
    let a = [];
    if (data.rows[0] != undefined) {
        for (let i = 0; i < data.rows.length; i++) {
            let name = data.rows[i].teacher_name;
            let level = data.rows[i].teacher_level;
            let id = data.rows[i].teacher_id;
            let city = data.rows[i].teacher_city;
            let card = new TeacherProfile(name, id, city, level);
            a.push(card);
        }
        return a;
    }
    else {
        return [new TeacherProfile()];
    }
}
exports.returnTeacherProfileFromPg = returnTeacherProfileFromPg;
//tsc --module commonjs ./api/models/teacherModel.ts
