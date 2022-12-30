"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCard = void 0;
const href_js_1 = require("../modules/href.js");
const localStorage_js_1 = require("../modules/localStorage.js");
class StudentCard {
    constructor(name, status, id) {
        this.name = name;
        this.status = status;
        this.id = id;
        this.DOM = {
            container: document.createElement("section"),
            student_name: document.createElement("span"),
            student_status: document.createElement("span"),
            student_id: document.createElement("span")
        };
    }
    display(parent) {
        this.DOM.container.className = "student-card-container";
        this.DOM.student_status.id = "status";
        this.DOM.student_status.innerText = "Status: " + this.status;
        this.DOM.student_name.innerText = this.name;
        this.DOM.student_id.innerText = this.id;
        this.DOM.student_id.style.fontWeight = "200";
        this.DOM.container.addEventListener("click", href_js_1.toStudent);
        this.DOM.container.addEventListener("click", () => {
            (0, localStorage_js_1.saveSession)(this.id);
        });
        parent.appendChild(this.DOM.container);
        this.DOM.container.appendChild(this.DOM.student_name);
        this.DOM.container.appendChild(this.DOM.student_status);
        this.DOM.container.appendChild(this.DOM.student_id);
    }
}
exports.StudentCard = StudentCard;
