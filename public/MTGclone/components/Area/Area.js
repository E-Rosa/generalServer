"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Area = void 0;
class Area {
    constructor(cardsArray) {
        this.cardsArray = cardsArray;
        this.container = document.createElement('section');
    }
    addCard(card) {
        this.cardsArray.push(card);
        card.currentZone = this;
        if (card.gameZones === null) {
            card.gameZones = [this];
        }
        else {
            card.gameZones.push(this);
        }
        console.log('added cards to: ', this, '\nThe new array is: ', this.cardsArray);
    }
    removeCard(key) {
        this.cardsArray = this.cardsArray.filter((card) => {
            return card.key != key;
        });
        console.log('removed cards from: ', this, '\nThe new array is: ', this.cardsArray);
    }
    displayArray() {
        while (this.container.lastChild) {
            if (this.container.firstElementChild) {
                if (this.container.firstElementChild.id === 'card-container') {
                    this.container.removeChild(this.container.firstElementChild);
                }
            }
        }
        console.log('removed all children of: ', this.container);
        this.cardsArray.forEach(card => {
            card.display(this.container);
        });
    }
}
exports.Area = Area;
