import { toPayments, toClasses, toAddStudent, toIndex, } from "../modules/href.js";
import { checkStorage, validateStudentProfile, } from "../modules/validation.js";
import { getStudentById, putStudentProfile } from "../modules/fetch.js";
import { fillStudentProfileDOM, returnStudentProfile, popUpMessage } from "../modules/DOM.js";
let classesBtn = document.getElementById("classes-button");
let paymentsBtn = document.getElementById("payments-button");
let addStudentBtn = document.getElementById("add-button");
let submitBtn = document.getElementById("submit-button");
let studentProfile = {};
addStudentBtn.addEventListener("click", toAddStudent);
classesBtn.addEventListener("click", toClasses);
paymentsBtn.addEventListener("click", toPayments);
submitBtn.addEventListener("click", updateStudentProfile);
function getStudentProfile() {
    if (checkStorage("student_id")) {
        let id = window.sessionStorage.getItem("student_id");
        getStudentById(id)
            .then((data) => {
            return data.json();
        })
            .then((data) => {
            studentProfile = data[0];
            console.log(studentProfile);
            fillStudentProfileDOM(studentProfile);
        });
    }
    else {
        toIndex();
    }
}
getStudentProfile();
function updateStudentProfile() {
    let student = returnStudentProfile();
    console.log(student);
    if (validateStudentProfile(student)) {
        putStudentProfile(student.id, student);
        popUpMessage('Success!', document.body, 'success');
    }
    else {
        popUpMessage('Not sent. City must have 50 characters or less. Name must have 150 characters or less.', document.body, 'error');
    }
}
/*tsc --module es6 ./public/p-student/student.ts ./public/p-payments/payments.ts ./public/p-index/index.ts ./public/p-addStudent/addStudent.ts ./public/p-classes/classes.ts ./public/p-addPayment/addPayment.ts ./public/p-addClass/addClass.ts ./public/modules/href.ts ./public/modules/fetch.ts ./public/modules/DOM.ts*/
