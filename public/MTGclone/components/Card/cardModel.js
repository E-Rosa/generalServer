export class Card {
    constructor(name, cardType, cardAttributes, power, thoughness, imgSrc, setName, setImgSrc, MC) {
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
    }
    display(parent) {
        let cardContainer = document.createElement("section");
        cardContainer.id = "card-container";
        cardContainer.draggable = true;
        cardContainer.setAttribute("key", this.key);
        parent.appendChild(cardContainer);
        let cardHeaderContainer = document.createElement("section");
        cardHeaderContainer.id = "card-name-container";
        cardContainer.appendChild(cardHeaderContainer);
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
        cardContainer.appendChild(cardFrame);
        let cardMiddleContainer = document.createElement("section");
        cardMiddleContainer.id = "card-name-container";
        cardContainer.appendChild(cardMiddleContainer);
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
        cardContainer.appendChild(cardTextFrame);
        let cardPowerFrame = document.createElement("div");
        cardPowerFrame.id = "card-power-frame";
        cardPowerFrame.textContent = this.power + "/" + this.thoughness;
        cardContainer.appendChild(cardPowerFrame);
        this.cardType != "Creature" ? (cardPowerFrame.style.opacity = "0%") : "";
        cardContainer.addEventListener("dragstart", handleDragStart);
        cardContainer.addEventListener("dragover", handleDragOver);
        cardContainer.addEventListener("dragenter", handleDragEnter);
        cardContainer.addEventListener("dragend", handleDragEnd);
        cardContainer.addEventListener("drop", handleDrop);
        function handleDragStart(e) {
            let eventTarget = e.target;
            console.log(eventTarget);
            let dataTransfer = e.dataTransfer;
            dataTransfer.effectAllowed = "move";
            dataTransfer.setData("text/plain", eventTarget.getAttribute("key"));
        }
        function handleDragOver(e) {
            e.preventDefault();
        }
        function handleDragEnter(e) {
            let dataTransfer = e.dataTransfer;
            console.log('dragEnter');
            let target = e.target;
            if (target.id === 'card-container') {
                let nextSibling = target.nextSibling;
                let prevSibling = target.previousSibling;
                if (nextSibling && prevSibling) {
                    nextSibling.style.transform = 'translateY(0px)';
                    prevSibling.style.transform = 'translateY(0px)';
                    target.style.transform = 'translateY(20px)';
                }
                else if (nextSibling) {
                    nextSibling.style.transform = 'translateY(0px)';
                    target.style.transform = 'translateY(20px)';
                }
                else if (prevSibling) {
                    prevSibling.style.transform = 'translateY(0px)';
                    target.style.transform = 'translateY(20px)';
                }
                else {
                    target.style.transform = 'translateY(20px)';
                }
            }
        }
        function handleDrop(e) {
            e.preventDefault();
            let dataTransfer = e.dataTransfer;
            console.log(dataTransfer.getData("text/plain"));
            let draggedElement = document.querySelector(`[key="${dataTransfer.getData("text/plain")}"]`);
            let temp = draggedElement.innerHTML;
            draggedElement.innerHTML = this.innerHTML;
            this.innerHTML = temp;
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
