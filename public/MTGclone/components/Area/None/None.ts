import { Area } from "../Area.js";
import { Card } from "../../Card/cardModel.js";

export class None extends Area{
    constructor(cardsArray: Card[]){
        super(cardsArray);
    }
}