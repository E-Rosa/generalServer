"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Battlefield_js_1 = require("../Area/Battlefield/Battlefield.js");
const Deck_js_1 = require("../Area/Deck/Deck.js");
const Graveyard_js_1 = require("../Area/Graveyard/Graveyard.js");
const Hand_js_1 = require("../Area/Hand/Hand.js");
class Game {
    constructor() {
        this.battlefield = new Battlefield_js_1.Battlefield([]);
        this.graveyard = new Graveyard_js_1.Graveyard([]);
        this.deck = new Deck_js_1.Deck([]);
        this.hand = new Hand_js_1.Hand([]);
    }
    start(parent) {
        let gamefield = document.createElement('section');
        gamefield.className = 'gamefield';
        parent.appendChild(gamefield);
        let p1field = document.createElement('section');
        p1field.className = 'p1field';
        gamefield.appendChild(p1field);
        this.battlefield.display(p1field, [this.hand, this.graveyard, this.deck, this.battlefield.frontRow]);
        let handDeckGraveContainer = document.createElement('section');
        handDeckGraveContainer.className = 'handDeckGraveContainer';
        p1field.appendChild(handDeckGraveContainer);
        this.hand.display(handDeckGraveContainer);
        this.deck.displayDeckPile(handDeckGraveContainer, this.hand.container, this.hand);
        this.graveyard.display(handDeckGraveContainer);
    }
}
exports.Game = Game;
