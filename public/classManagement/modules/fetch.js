function getStudent(name) {
    return fetch(`http://localhost:5000/api/classManager/students/${name}`);
}
function getStudentById(id) {
    return fetch(`http://localhost:5000/api/classManager/students/profile/${id}`);
}
function putStudentProfile(id, data) {
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
