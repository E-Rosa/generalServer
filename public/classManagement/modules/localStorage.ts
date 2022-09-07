export function saveSession(id: string): void {
    window.sessionStorage.removeItem("student_id");
    window.sessionStorage.setItem("student_id", id);
}