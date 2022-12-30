"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battlefield = void 0;
const Area_js_1 = require("../Area.js");
const FrontRow_js_1 = require("./FrontRow/FrontRow.js");
class Battlefield extends Area_js_1.Area {
    constructor(cardsArray) {
        super(cardsArray);
        this.container = document.createElement("section");
        this.frontRow = new FrontRow_js_1.FrontRow([]);
    }
    display(parent, areas) {
        //Creates element, attach className and append to parent.
        this.container.className = "battlefield";
        parent.appendChild(this.container);
        this.frontRow.container.className = "frontRow";
        this.container.appendChild(this.frontRow.container);
        this.frontRow.creatureField.container.className = "creaturefield";
        this.frontRow.container.appendChild(this.frontRow.creatureField.container);
        this.frontRow.artifactField.container.className = "artifactfield";
        this.frontRow.container.appendChild(this.frontRow.artifactField.container);
        let landfield = document.createElement("section");
        landfield.className = "landfield";
        this.container.appendChild(landfield);
        console.log("created and appended: ", this.container, this.frontRow.container, this.frontRow.creatureField.container, this.frontRow.artifactField.container, landfield);
        //Add listeners for 'drag' interactions
        this.container.addEventListener("dragover", handleDragOver);
        this.container.addEventListener("dragenter", handleDragEnter);
        this.container.addEventListener("dragend", handleDragEnd);
        this.container.addEventListener("drop", (e) => {
            e.preventDefault();
            //Define the event's properties to fix dual type errors (js bullshit)
            let dataTransfer = e.dataTransfer;
            let target = e.target;
            //get the draggedElement's key
            let key = dataTransfer.getData("text/plain");
            console.log("drop event target is: ", target);
            //If drop target on any part of the battlefield
            if (target.className === "battlefield" || target.className === 'frontRow' || target.className === 'creaturefield' || target.className === 'artifactfield' || target.className === 'landfield') {
                //check all areas
                areas.forEach((area) => {
                    //find the card that matches the key
                    let card = area.cardsArray.find((card) => {
                        return card.key === key;
                    });
                    console.log("target card is: ", card);
                    //if the card exists
                    if (card != undefined) {
                        //check for it's type
                        if (card.cardType === "Creature") {
                            //add the card to this array, and remove the card from the source area's array
                            this.frontRow.creatureField.addCard(card);
                            this.frontRow.creatureField.displayArray();
                            area.removeCard(card.key);
                            area.displayArray();
                        }
                    }
                });
            }
        });
        function handleDragOver(e) {
            e.preventDefault();
        }
        function handleDragEnter(e) {
            let dataTransfer = e.dataTransfer;
            let target = e.target;
            if (target.className === "battlefield") {
            }
        }
        function handleDragEnd(e) {
            let cardsDOM = document.querySelectorAll("#card-container");
            cardsDOM.forEach((card) => {
                card.style.transform = "translateY(0px)";
            });
        }
    }
    displayArray() {
        while (this.container.lastChild) {
            if (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild);
            }
        }
        this.cardsArray.forEach((card) => {
            card.display(this.container);
        });
        console.log("removed all children of: ", this.container, "\nDisplayed all cards from: ", this.cardsArray, "\ninto: ", this.container);
    }
}
exports.Battlefield = Battlefield;
