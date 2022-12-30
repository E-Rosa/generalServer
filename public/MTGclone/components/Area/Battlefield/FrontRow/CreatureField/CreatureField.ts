import { Area } from "../../../Area.js";
import { Card } from "../../../../Card/cardModel.js";

export class CreatureField extends Area{
    constructor(cardsArray: Card[]){
        super(cardsArray)
        this.container = document.createElement('section');
    }
}