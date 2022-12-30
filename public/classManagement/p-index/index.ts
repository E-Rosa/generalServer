import { getStudent } from "../modules/fetch.js";
import { StudentCard } from "../models/studentCard.js";

let submitBtn: HTMLButtonElement = document.getElementById(
  "search-button"
) as HTMLButtonElement;
let nameInput: HTMLInputElement = document.getElementById(
  "search-bar"
) as HTMLInputElement;
let cardsContainer: HTMLElement = document.getElementById(
  "student-cards-list"
) as HTMLElement;
let form: HTMLFormElement = document.querySelector("form") as HTMLFormElement;

submitBtn.addEventListener("click", () => {
  getStudent(nameInput.value)
    .then((data: any) => {
      return data.json();
    })
    .then((cards: any) => {
      cardsContainer.innerHTML = "";
      for (let i = 0; i < cards.length; i++) {
        let studentCard = new StudentCard(
          cards[i].name,
          cards[i].status,
          cards[i].id
        );
        studentCard.display(cardsContainer);
      }
    })
    .catch((err: any) => {
      console.log(err);
    });
});
nameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    submitBtn.click();
  }
});

export {};

//tsc --module es6 ./public/p-index/index.ts
