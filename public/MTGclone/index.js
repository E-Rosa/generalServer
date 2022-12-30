"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cardsData_js_1 = require("./data/cardsData.js");
const Game_js_1 = require("./components/Game/Game.js");
let game = new Game_js_1.Game();
let cardsArray = [cardsData_js_1.bolt, cardsData_js_1.marshRabbit, cardsData_js_1.pitlord, cardsData_js_1.grizzlyBear];
cardsArray.forEach((card) => {
    card.gameZones = [game.battlefield, game.hand, game.graveyard, game.deck];
    game.deck.addCard(card);
});
game.start(document.body);
game.hand.displayArray();
