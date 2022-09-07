import { Card } from '../../Card/cardModel.js';
import { Area } from '../Area.js';
import { Hand } from '../Hand/Hand.js';

export class Graveyard extends Area{
    constructor(cardsArray: Card[]){
        super(cardsArray)
    }
    display(parent: HTMLElement, areas: Area[]){
        //Creates element, attach className and append to parent.
        this.container.className='graveyard';
        parent.appendChild(this.container);
    }
}