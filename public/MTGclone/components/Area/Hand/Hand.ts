import { Area } from "../Area.js";
import { Card } from "../../Card/cardModel.js";

export class Hand extends Area{
    constructor(cardsArray: Card[]){
        super(cardsArray);
    }
    display(parent: HTMLElement){
        //display the cards in the cardsArray on the parent element
        this.container.className='hand-container';
        parent.appendChild(this.container);
    }
    
}