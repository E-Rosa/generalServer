export function toClasses(): void {
  window.location.href = "http://localhost:5000/classManagement/p-classes/classes.html";
}
export function toPayments(): void {
  window.location.href = "http://localhost:5000/classManagement/p-payments/payments.html";
}
export function toAddClass(): void {
  window.location.href = "http://localhost:5000/classManagement/p-addClass/addClass.html";
}
export function toAddPayment(): void {
  window.location.href = "http://localhost:5000/classManagement/p-addPayment/addPayment.html";
}
export function toAddStudent(): void {
  window.location.href = "http://localhost:5000/classManagement/p-addStudent/addStudent.html";
}
export function toIndex(): void {
  window.location.href = "http://localhost:5000/classManagement/index.html";
}
export function toStudent(): void {
  window.location.href = `http://localhost:5000/classManagement/p-student/student.html`;
}

//tsc --module es6 ./public/modules/href.ts
