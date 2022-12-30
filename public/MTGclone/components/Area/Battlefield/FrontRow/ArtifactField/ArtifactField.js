"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactField = void 0;
const Area_js_1 = require("../../../Area.js");
class ArtifactField extends Area_js_1.Area {
    constructor(cardsArray) {
        super(cardsArray);
        this.container = document.createElement('section');
    }
}
exports.ArtifactField = ArtifactField;
