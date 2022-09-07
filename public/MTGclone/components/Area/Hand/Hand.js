import { Area } from "../Area.js";
export class Hand extends Area {
    constructor(cardsArray) {
        super(cardsArray);
    }
    display(parent) {
        //display the cards in the cardsArray on the parent element
        this.container.className = 'hand-container';
        parent.appendChild(this.container);
    }
}
