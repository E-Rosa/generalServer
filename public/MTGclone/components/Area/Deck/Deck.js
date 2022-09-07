import { Area } from '../Area.js';
//create a Deck class that holds an array of Cards plus a Colors property,
//that's an array of strings
//Deck also has a method called draw()
//Draw method grabs the first item of the array and displays it on the screen
//Shuffle() function loops over an array. I=length, while i > 0, i--
//var j = random number between length and 0
//var temp = last position's value array[i]
//last position (array[i]) = array[j] (random position)
//array[j] (random position) = array[i] (last position)
export class Deck extends Area {
    constructor(cardsArray) {
        super(cardsArray);
        this.colors = this.getColors();
        this.colorsDOM = this.getColorsDOM(this.colors);
    }
    getColors() {
        let colorsArray = [];
        this.cardsArray.forEach((card) => {
            card.colors.forEach((color) => {
                if (!colorsArray.includes(color)) {
                    colorsArray.push(color);
                }
            });
        });
        return colorsArray;
    }
    getColorsDOM(colorsArray) {
        //For each of the colors, push a new HTMLElement into the array according to that color
        let colorsArrayDOM = [];
        colorsArray.forEach((color) => {
            colorsArrayDOM.push(this.returnManaSymbol(color, '0'));
        });
        return colorsArrayDOM;
    }
    returnManaSymbol(color, cost) {
        let manaSymbol = document.createElement('span');
        manaSymbol.id = 'mana-symbol';
        manaSymbol.style.backgroundColor = color;
        if (cost != '0') {
            manaSymbol.textContent = cost;
        }
        return manaSymbol;
    }
    displayDeckPile(parent, handContainer, handObj) {
        this.container.className = 'deck-pile-container';
        let cardsCount = this.cardsArray.length;
        this.container.textContent = cardsCount.toString();
        parent.appendChild(this.container);
        this.container.addEventListener('click', () => {
            this.cardsArray[0].display(handContainer);
            handObj.addCard(this.cardsArray[0]);
            this.removeCard(this.cardsArray[0].key);
            this.container.textContent = cardsCount.toString();
            console.log('Deck cards are: ', this.cardsArray);
            console.log('Hand cards are: ', handObj.cardsArray);
        });
    }
    shuffle() {
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * this.cardsArray.length);
            let temp = this.cardsArray[i];
            this.cardsArray[i] = this.cardsArray[j];
            this.cardsArray[j] = temp;
        }
    }
    addCard(card) {
        this.cardsArray.push(card);
        this.container.textContent = (this.cardsArray.length).toString();
    }
    removeCard(key) {
        this.cardsArray = this.cardsArray.filter((card) => {
            return card.key != key;
        });
        this.container.textContent = this.cardsArray.length.toString();
    }
}
