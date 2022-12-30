"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(name, cardType, cardAttributes, power, thoughness, imgSrc, setName, setImgSrc, MC, currentZone, gameZones) {
        this.name = name;
        this.cardType = cardType;
        this.cardAttributes = cardAttributes;
        this.power = power;
        this.thoughness = thoughness;
        this.imgSrc = imgSrc;
        this.setName = setName;
        this.setImgSrc = setImgSrc;
        this.colors = MC.filter((color) => {
            return color != "C";
        });
        this.MC = MC;
        this.CVC = MC.length;
        this.MCDOM = this.returnManaSymbolsDOM(MC);
        this.key = Math.floor(Math.random() * 100000).toString();
        this.container = document.createElement("section");
        this.currentZone = currentZone;
        this.gameZones = gameZones;
    }
    display(parent) {
        while (this.container.lastChild) {
            if (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild);
            }
        }
        console.log('removed all children from: ', this.container);
        this.container.id = "card-container";
        this.container.setAttribute("key", this.key);
        parent.appendChild(this.container);
        this.container.draggable = true;
        let cardHeaderContainer = document.createElement("section");
        cardHeaderContainer.id = "card-name-container";
        this.container.appendChild(cardHeaderContainer);
        cardHeaderContainer.style.pointerEvents = 'none';
        let cardNameDOM = document.createElement("span");
        cardNameDOM.id = "card-name-DOM";
        cardNameDOM.textContent = this.name;
        cardHeaderContainer.appendChild(cardNameDOM);
        let cardManacostContainer = document.createElement("section");
        cardManacostContainer.id = "card-manacost-container";
        cardHeaderContainer.appendChild(cardManacostContainer);
        this.MCDOM.forEach((manaSymbolDOM) => {
            cardManacostContainer.appendChild(manaSymbolDOM);
        });
        let cardFrame = document.createElement("div");
        cardFrame.id = "card-frame";
        this.container.appendChild(cardFrame);
        let cardMiddleContainer = document.createElement("section");
        cardMiddleContainer.id = "card-name-container";
        this.container.appendChild(cardMiddleContainer);
        let cardTypeDOM = document.createElement("span");
        cardTypeDOM.id = "card-name-DOM";
        cardTypeDOM.textContent =
            this.cardType +
                " - " +
                this.cardAttributes[0] +
                " " +
                this.cardAttributes[1];
        cardMiddleContainer.appendChild(cardTypeDOM);
        let setIcon = this.returnManaSymbol("grey", "Alpha");
        cardMiddleContainer.appendChild(setIcon);
        let cardTextFrame = document.createElement("div");
        cardTextFrame.id = "card-text-frame";
        this.container.appendChild(cardTextFrame);
        let cardPowerFrame = document.createElement("div");
        cardPowerFrame.id = "card-power-frame";
        cardPowerFrame.textContent = this.power + "/" + this.thoughness;
        this.container.appendChild(cardPowerFrame);
        this.cardType != "Creature" ? (cardPowerFrame.style.opacity = "0%") : "";
        console.log('card: ', this, '\nwas displayed');
        this.container.addEventListener("dragstart", handleDragStart);
        this.container.addEventListener("dragover", handleDragOver);
        this.container.addEventListener("dragenter", handleDragEnter);
        this.container.addEventListener("dragend", handleDragEnd);
        this.container.addEventListener("drop", (e) => {
            e.preventDefault();
            let dataTransfer = e.dataTransfer;
            let dropzone = e.target;
            let dropzoneKey = dropzone.getAttribute('key');
            let draggedElementKey = dataTransfer.getData("text/plain");
            let draggedElement = document.querySelector(`[key="${dataTransfer.getData("text/plain")}"]`);
            if (dropzone.id === 'card-container') {
                //hand array looks like [1,2,3]
                //want to change to: [2,1,3]
                //and then displayArray
                //need 2 indexes
                if (this.currentZone) {
                    //1
                    let draggedCardObjIndex = this.currentZone.cardsArray.findIndex((card) => { return card.key === draggedElementKey; });
                    //0
                    let dropzoneCardObjIndex = this.currentZone.cardsArray.findIndex((card) => { return card.key === dropzoneKey; });
                    if (draggedCardObjIndex && dropzoneCardObjIndex) {
                        let draggedCardObjTemp = this.currentZone.cardsArray[dropzoneCardObjIndex]; // temp = value of [0]
                        this.currentZone.cardsArray[dropzoneCardObjIndex] = this.currentZone.cardsArray[draggedCardObjIndex]; // [0] = [1]
                        // 1 1
                        this.currentZone.cardsArray[draggedCardObjIndex] = draggedCardObjTemp; // [1] = [0]
                        this.currentZone.displayArray();
                    }
                }
            }
        });
        this.container.addEventListener('click', (e) => {
            if (this.gameZones) {
                if (this.currentZone) {
                    if (this.currentZone.constructor.name === 'Hand') {
                        //console.log('current zone is hand');
                    }
                    else if (this.currentZone.constructor.name === 'Battlefield') {
                        //console.log('current zone is Battlefield');
                        let graveyard = this.gameZones.find((zone) => { return zone.constructor.name === 'Graveyard'; });
                        console.log('This.current zone is: ', this.currentZone);
                        this.currentZone.removeCard(this.key);
                        this.currentZone.displayArray();
                        if (graveyard) {
                            graveyard.addCard(this);
                            graveyard.displayArray();
                        }
                    }
                }
            }
        });
        function handleDragStart(e) {
            console.log('drag starts');
            let eventTarget = e.target;
            console.log('eventTarget is: ', eventTarget);
            let dataTransfer = e.dataTransfer;
            dataTransfer.effectAllowed = "move";
            dataTransfer.setData("text/plain", eventTarget.getAttribute("key"));
        }
        function handleDragOver(e) {
            e.preventDefault();
        }
        function handleDragEnter(e) {
            let dataTransfer = e.dataTransfer;
            let target = e.target;
            if (target.id === 'card-container') {
                let nextSibling = target.nextSibling;
                let prevSibling = target.previousSibling;
                if (nextSibling && prevSibling) {
                    nextSibling.style.transform = 'translateY(0px)';
                    prevSibling.style.transform = 'translateY(0px)';
                    target.style.transform = 'translateY(10px)';
                }
                else if (nextSibling) {
                    nextSibling.style.transform = 'translateY(0px)';
                    target.style.transform = 'translateY(10px)';
                }
                else if (prevSibling) {
                    prevSibling.style.transform = 'translateY(0px)';
                    target.style.transform = 'translateY(10px)';
                }
                else {
                    target.style.transform = 'translateY(10px)';
                }
            }
        }
        function handleDragEnd(e) {
            let cardsDOM = document.querySelectorAll('#card-container');
            cardsDOM.forEach((card) => {
                card.style.transform = 'translateY(0px)';
            });
        }
    }
    returnManaSymbol(color, cost) {
        let manaSymbol = document.createElement("span");
        manaSymbol.id = "mana-symbol";
        let red = "#a84232";
        let purple = "#8a1779";
        let white = "#f7fac8";
        let black = "#363635";
        let green = "#137305";
        let colorless = "#878787";
        if (color === "R") {
            manaSymbol.style.backgroundColor = red;
        }
        else if (color === "G") {
            manaSymbol.style.backgroundColor = green;
        }
        else if (color === "W") {
            manaSymbol.style.backgroundColor = white;
        }
        else if (color === "B") {
            manaSymbol.style.backgroundColor = black;
        }
        else if (color === "P") {
            manaSymbol.style.backgroundColor = purple;
        }
        else if (color === "C") {
            manaSymbol.style.backgroundColor = colorless;
        }
        if (cost != "0") {
            manaSymbol.textContent = cost;
        }
        return manaSymbol;
    }
    returnManaSymbolsDOM(colors) {
        let manaSymbolsArrayDOM = [];
        let colorlessCost = 0;
        colors.forEach((color) => {
            if (color != "C") {
                manaSymbolsArrayDOM.push(this.returnManaSymbol(color, "0"));
            }
            else {
                colorlessCost++;
            }
        });
        colorlessCost != 0
            ? manaSymbolsArrayDOM.push(this.returnManaSymbol("C", colorlessCost.toString()))
            : "";
        return manaSymbolsArrayDOM;
    }
}
exports.Card = Card;
