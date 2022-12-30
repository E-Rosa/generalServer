"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hand = void 0;
const Area_js_1 = require("../Area.js");
class Hand extends Area_js_1.Area {
    constructor(cardsArray) {
        super(cardsArray);
    }
    display(parent) {
        //display the cards in the cardsArray on the parent element
        this.container.className = 'hand-container';
        parent.appendChild(this.container);
    }
}
exports.Hand = Hand;
