import { Card } from '../../Card/cardModel.js';
import { Area } from '../Area.js';
import { Hand } from '../Hand/Hand.js';

export class Graveyard extends Area{
    constructor(cardsArray: Card[]){
        super(cardsArray);
        this.container=document.createElement('section');
    }
    display(parent: HTMLElement){
        //Creates element, attach className and append to parent.
        this.container.className='.deck-pile-container';
        parent.appendChild(this.container);
    }
}