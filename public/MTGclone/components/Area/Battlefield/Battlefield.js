import { Area } from '../Area.js';
export class Battlefield extends Area {
    constructor(cardsArray) {
        super(cardsArray);
    }
    display(parent, areas) {
        //Creates element, attach className and append to parent.
        this.container.className = 'battlefield';
        parent.appendChild(this.container);
        let frontRow = document.createElement('section');
        frontRow.className = 'frontRow';
        this.container.appendChild(frontRow);
        let creaturefield = document.createElement('section');
        creaturefield.className = 'creaturefield';
        frontRow.appendChild(creaturefield);
        let artifactfield = document.createElement('section');
        artifactfield.className = 'artifactfield';
        frontRow.appendChild(artifactfield);
        let landfield = document.createElement('section');
        landfield.className = 'landfield';
        this.container.appendChild(landfield);
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
            //get the draggedElement's DOM element
            let draggedElement = document.querySelector(`[key="${key}"]`);
            //If drop something on the frontRow element
            if (target.className === 'frontRow') {
                //check all areas 
                areas.forEach(area => {
                    //find the card that matches the key
                    let card = area.cardsArray.find(card => {
                        return card.key === key;
                    });
                    if (card != undefined) {
                        //add the card to this array, and remove the card from the source area's array
                        console.log('The area is: ', area);
                        this.addCard(card);
                        area.removeCard(card.key);
                        area.displayArray();
                    }
                });
                //append the element to frontRow
                this.displayArray();
            }
        });
        function handleDragOver(e) {
            e.preventDefault();
        }
        function handleDragEnter(e) {
            let dataTransfer = e.dataTransfer;
            let target = e.target;
            if (target.className === 'battlefield') {
            }
        }
        function handleDragEnd(e) {
            let cardsDOM = document.querySelectorAll('#card-container');
            cardsDOM.forEach((card) => {
                card.style.transform = 'translateY(0px)';
            });
        }
    }
}