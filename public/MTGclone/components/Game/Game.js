import { Battlefield } from "../Area/Battlefield/Battlefield.js";
import { Deck } from "../Area/Deck/Deck.js";
import { Graveyard } from "../Area/Graveyard/Graveyard.js";
import { Hand } from "../Area/Hand/Hand.js";
export class Game {
    constructor() {
        this.battlefield = new Battlefield([]);
        this.graveyard = new Graveyard([]);
        this.deck = new Deck([]);
        this.hand = new Hand([]);
    }
    start(parent) {
        let gamefield = document.createElement('section');
        gamefield.className = 'gamefield';
        parent.appendChild(gamefield);
        let p1field = document.createElement('section');
        p1field.className = 'p1field';
        gamefield.appendChild(p1field);
        this.battlefield.display(p1field, [this.hand, this.graveyard, this.deck]);
        let handDeckGraveContainer = document.createElement('section');
        handDeckGraveContainer.className = 'handDeckGraveContainer';
        p1field.appendChild(handDeckGraveContainer);
        this.hand.display(handDeckGraveContainer);
        this.deck.displayDeckPile(handDeckGraveContainer, this.hand.container, this.hand);
    }
}
