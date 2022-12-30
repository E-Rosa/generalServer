import { toStudent } from "../modules/href.js";
import { saveSession } from "../modules/localStorage.js";
export class StudentCard {
  name: string;
  status: string;
  id: string;
  DOM: {
    container:HTMLElement;
    student_name: HTMLElement;
    student_status: HTMLElement;
    student_id: HTMLElement
  }
  constructor(name: string, status: string, id: string) {
    this.name = name;
    this.status = status;
    this.id = id;
    this.DOM={
        container: document.createElement("section"),
        student_name: document.createElement("span"),
        student_status: document.createElement("span"),
        student_id: document.createElement("span")
    }
  }
  display(parent: HTMLElement) {
    this.DOM.container.className = "student-card-container";

    this.DOM.student_status.id = "status";
    this.DOM.student_status.innerText = "Status: " + this.status;

    this.DOM.student_name.innerText = this.name;

    this.DOM.student_id.innerText = this.id;
    this.DOM.student_id.style.fontWeight = "200";

    this.DOM.container.addEventListener("click", toStudent);
    this.DOM.container.addEventListener("click", ()=>{
        saveSession(this.id)
    });

    parent.appendChild(this.DOM.container);
    this.DOM.container.appendChild(this.DOM.student_name);
    this.DOM.container.appendChild(this.DOM.student_status);
    this.DOM.container.appendChild(this.DOM.student_id);
  }
}
