"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontRow = void 0;
const Area_js_1 = require("../../Area.js");
const CreatureField_js_1 = require("./CreatureField/CreatureField.js");
const ArtifactField_js_1 = require("./ArtifactField/ArtifactField.js");
class FrontRow extends Area_js_1.Area {
    constructor(cardsArray) {
        super(cardsArray);
        this.container = document.createElement('section');
        this.creatureField = new CreatureField_js_1.CreatureField([]);
        this.artifactField = new ArtifactField_js_1.ArtifactField([]);
    }
}
exports.FrontRow = FrontRow;
