import { getStudent } from "../modules/fetch.js";
import { createStudentCard } from "../modules/DOM.js";

let submitBtn: HTMLButtonElement = document.getElementById(
  "search-button"
) as HTMLButtonElement;
let nameInput: HTMLInputElement = document.getElementById(
  "search-bar"
) as HTMLInputElement;
let cardsContainer: HTMLElement = document.getElementById(
  "student-cards-list"
) as HTMLElement;

submitBtn?.addEventListener("click", getStudentByName);

function getStudentByName() {
  console.log(getStudent(nameInput?.value));
  getStudent(nameInput?.value)
    .then((data: any) => {
      return data.json();
    })
    .then((data: any) => {
      cardsContainer.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        let name = data[i].name;
        let status = data[i].status;
        let id = data[i].id;
        console.log(data[i]);
        createStudentCard(name, status, id, cardsContainer);
      }
    })
    .catch((err: any) => {
      console.log(err);
    });
}

export {};

//tsc --module es6 ./public/p-index/index.ts
