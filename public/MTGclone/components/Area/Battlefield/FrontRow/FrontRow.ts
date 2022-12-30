import { Area } from "../../Area.js";
import { Card } from "../../../Card/cardModel.js";
import { CreatureField } from "./CreatureField/CreatureField.js";
import { ArtifactField } from "./ArtifactField/ArtifactField.js";

export class FrontRow extends Area{
    creatureField: CreatureField;
    artifactField: ArtifactField;
    constructor(cardsArray: Card[]){
        super(cardsArray)
        this.container = document.createElement('section');
        this.creatureField = new CreatureField([]);
        this.artifactField = new ArtifactField([]);
    }
}