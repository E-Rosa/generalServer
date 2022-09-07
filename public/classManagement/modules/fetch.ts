import { StudentProfile } from "../models/studentProfile";

function getStudent(name: string): any {
  return fetch(`http://localhost:5000/api/classManager/students/${name}`)
}
function getStudentById(id: string): any {
  return fetch(`http://localhost:5000/api/classManager/students/profile/${id}`);
}

function putStudentProfile(id: string, data: StudentProfile): any {
  return fetch(`http://localhost:5000/api/classManager/students/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export { getStudent, getStudentById, putStudentProfile };

//tsc --module es6 ./public/modules/fetch.ts
