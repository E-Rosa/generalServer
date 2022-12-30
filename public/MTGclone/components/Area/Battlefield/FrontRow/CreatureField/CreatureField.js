"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatureField = void 0;
const Area_js_1 = require("../../../Area.js");
class CreatureField extends Area_js_1.Area {
    constructor(cardsArray) {
        super(cardsArray);
        this.container = document.createElement('section');
    }
}
exports.CreatureField = CreatureField;
