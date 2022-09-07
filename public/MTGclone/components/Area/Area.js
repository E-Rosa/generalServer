export class Area {
    constructor(cardsArray) {
        this.cardsArray = cardsArray;
        this.container = document.createElement('section');
    }
    addCard(card) {
        this.cardsArray.push(card);
    }
    removeCard(key) {
        this.cardsArray = this.cardsArray.filter((card) => {
            return card.key != key;
        });
        console.log(this.cardsArray);
    }
    displayArray() {
        while (this.container.lastChild) {
            if (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild);
            }
        }
        this.cardsArray.forEach(card => {
            card.display(this.container);
        });
    }
}
