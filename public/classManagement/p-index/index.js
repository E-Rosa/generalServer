import { getStudent } from "../modules/fetch.js";
import { createStudentCard } from "../modules/DOM.js";
let submitBtn = document.getElementById("search-button");
let nameInput = document.getElementById("search-bar");
let cardsContainer = document.getElementById("student-cards-list");
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", getStudentByName);
function getStudentByName() {
    console.log(getStudent(nameInput === null || nameInput === void 0 ? void 0 : nameInput.value));
    getStudent(nameInput === null || nameInput === void 0 ? void 0 : nameInput.value)
        .then((data) => {
        return data.json();
    })
        .then((data) => {
        cardsContainer.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            let name = data[i].name;
            let status = data[i].status;
            let id = data[i].id;
            console.log(data[i]);
            createStudentCard(name, status, id, cardsContainer);
        }
    })
        .catch((err) => {
        console.log(err);
    });
}
//tsc --module es6 ./public/p-index/index.ts
