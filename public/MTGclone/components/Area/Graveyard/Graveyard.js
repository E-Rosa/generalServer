import { Area } from '../Area.js';
export class Graveyard extends Area {
    constructor(cardsArray) {
        super(cardsArray);
    }
    display(parent, areas) {
        //Creates element, attach className and append to parent.
        this.container.className = 'graveyard';
        parent.appendChild(this.container);
    }
}
