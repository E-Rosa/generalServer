"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graveyard = void 0;
const Area_js_1 = require("../Area.js");
class Graveyard extends Area_js_1.Area {
    constructor(cardsArray) {
        super(cardsArray);
        this.container = document.createElement('section');
    }
    display(parent) {
        //Creates element, attach className and append to parent.
        this.container.className = '.deck-pile-container';
        parent.appendChild(this.container);
    }
}
exports.Graveyard = Graveyard;
