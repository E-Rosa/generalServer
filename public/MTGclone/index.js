import { bolt } from "./data/cardsData.js";
import { Game } from "./components/Game/Game.js";
let game = new Game();
game.start(document.body);
game.deck.addCard(bolt);
game.hand.displayArray();
