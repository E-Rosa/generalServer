"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_js_1 = require("../modules/fetch.js");
const studentCard_js_1 = require("../models/studentCard.js");
let submitBtn = document.getElementById("search-button");
let nameInput = document.getElementById("search-bar");
let cardsContainer = document.getElementById("student-cards-list");
let form = document.querySelector("form");
submitBtn.addEventListener("click", () => {
    (0, fetch_js_1.getStudent)(nameInput.value)
        .then((data) => {
        return data.json();
    })
        .then((cards) => {
        cardsContainer.innerHTML = "";
        for (let i = 0; i < cards.length; i++) {
            let studentCard = new studentCard_js_1.StudentCard(cards[i].name, cards[i].status, cards[i].id);
            studentCard.display(cardsContainer);
        }
    })
        .catch((err) => {
        console.log(err);
    });
});
nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        submitBtn.click();
    }
});
//tsc --module es6 ./public/p-index/index.ts
