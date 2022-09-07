import { Card } from "../Card/cardModel.js";

export class Area{
    cardsArray: Card[];
    container: HTMLElement;
    constructor(cardsArray: Card[]){
        this.cardsArray=cardsArray;
        this.container=document.createElement('section');
    }
    addCard(card: Card){
        this.cardsArray.push(card);
    }
    removeCard(key: string){
        this.cardsArray = this.cardsArray.filter((card)=>{
            return card.key != key;
        });
        console.log(this.cardsArray);
    }
    displayArray(){
        while(this.container.lastChild){
            if(this.container.firstChild){
                this.container.removeChild(this.container.firstChild);
            }
        }
        this.cardsArray.forEach(card=>{
            card.display(this.container);
        })
    }
}