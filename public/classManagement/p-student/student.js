"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const href_js_1 = require("../modules/href.js");
const validation_js_1 = require("../modules/validation.js");
const fetch_js_1 = require("../modules/fetch.js");
const studentProfile_js_1 = require("../models/studentProfile.js");
let classesBtn = document.getElementById("classes-button");
let paymentsBtn = document.getElementById("payments-button");
let addStudentBtn = document.getElementById("add-button");
let submitBtn = document.getElementById("submit-button");
let studentProfile;
addStudentBtn.addEventListener("click", href_js_1.toAddStudent);
classesBtn.addEventListener("click", href_js_1.toClasses);
paymentsBtn.addEventListener("click", href_js_1.toPayments);
function getStudentProfile() {
    if ((0, validation_js_1.checkStorage)("student_id")) {
        let id = window.sessionStorage.getItem("student_id");
        (0, fetch_js_1.getStudentById)(id)
            .then((data) => {
            return data.json();
        })
            .then((data) => {
            //create new studentProfile Object with data.
            let studentData = data[0];
            studentProfile = new studentProfile_js_1.StudentProfile(studentData.id, studentData.name, studentData.birthday, studentData.city, studentData.level, studentData.subscription, studentData.frequency, studentData.description, studentData.status, studentData.teacher_name);
            studentProfile.display(document.body);
            //fillStudentProfileDOM(studentProfile);
        });
    }
    else {
        (0, href_js_1.toIndex)();
    }
}
getStudentProfile();
/*tsc --module es6 ./public/p-student/student.ts ./public/p-payments/payments.ts ./public/p-index/index.ts ./public/p-addStudent/addStudent.ts ./public/p-classes/classes.ts ./public/p-addPayment/addPayment.ts ./public/p-addClass/addClass.ts ./public/modules/href.ts ./public/modules/fetch.ts ./public/modules/DOM.ts*/
