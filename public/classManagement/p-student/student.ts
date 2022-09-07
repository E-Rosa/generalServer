import {
  toPayments,
  toClasses,
  toAddStudent,
  toIndex,
} from "../modules/href.js";
import {
  checkStorage,
  validateStudentProfile,
} from "../modules/validation.js";
import { getStudentById, putStudentProfile } from "../modules/fetch.js";
import { fillStudentProfileDOM, extractDOMtoObject, returnStudentProfile, popUpMessage } from "../modules/DOM.js";
import {StudentProfile} from '../models/studentProfile.js';

let classesBtn: HTMLButtonElement = document.getElementById(
  "classes-button"
) as HTMLButtonElement;
let paymentsBtn: HTMLButtonElement = document.getElementById(
  "payments-button"
) as HTMLButtonElement;
let addStudentBtn: HTMLButtonElement = document.getElementById(
  "add-button"
) as HTMLButtonElement;
let submitBtn: HTMLButtonElement = document.getElementById(
  "submit-button"
) as HTMLButtonElement;





let studentProfile: any = {};

addStudentBtn.addEventListener("click", toAddStudent);
classesBtn.addEventListener("click", toClasses);
paymentsBtn.addEventListener("click", toPayments);
submitBtn.addEventListener("click", updateStudentProfile);

function getStudentProfile() {
  if (checkStorage("student_id")) {
    let id: string = window.sessionStorage.getItem("student_id") as string;
    getStudentById(id)
      .then((data: any) => {
        return data.json();
      })
      .then((data: any) => {
        studentProfile = data[0];
        console.log(studentProfile);
        fillStudentProfileDOM(studentProfile);
      });
  } else {
    toIndex();
  }
}
getStudentProfile();

function updateStudentProfile(): any {
  let student = returnStudentProfile();
  console.log(student);
 if (validateStudentProfile(student)) {
    putStudentProfile(student.id, student);
    popUpMessage('Success!', document.body, 'success');
  } else {
    popUpMessage('Not sent. City must have 50 characters or less. Name must have 150 characters or less.', document.body, 'error');
  }
}

export {};

/*tsc --module es6 ./public/p-student/student.ts ./public/p-payments/payments.ts ./public/p-index/index.ts ./public/p-addStudent/addStudent.ts ./public/p-classes/classes.ts ./public/p-addPayment/addPayment.ts ./public/p-addClass/addClass.ts ./public/modules/href.ts ./public/modules/fetch.ts ./public/modules/DOM.ts*/
