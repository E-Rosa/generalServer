import {Card} from "./components/Card/cardModel.js";
import {Deck} from "./components/Area/Deck/Deck.js";
import {Area} from "./components/Area/Area.js";
import {Battlefield} from "./components/Area/Battlefield/Battlefield.js";
import {Hand} from "./components/Area/Hand/Hand.js";
import {Graveyard} from "./components/Area/Graveyard/Graveyard.js";
import {bolt, marshRabbit, pitlord, grizzlyBear} from "./data/cardsData.js";
import { Game } from "./components/Game/Game.js";

let game = new Game();
let cardsArray = [bolt, marshRabbit, pitlord, grizzlyBear];
cardsArray.forEach((card)=>{
    card.gameZones=[game.battlefield, game.hand, game.graveyard, game.deck];
    game.deck.addCard(card);
})
game.start(document.body);
game.hand.displayArray();




