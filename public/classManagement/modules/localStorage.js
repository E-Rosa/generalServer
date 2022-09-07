export function saveSession(id) {
    window.sessionStorage.removeItem("student_id");
    window.sessionStorage.setItem("student_id", id);
}
