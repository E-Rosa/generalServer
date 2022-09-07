//The process:
//To make an object draggable, set htmlelement.draggable=true;
//To define what happens when the drag process starts (usually setting the draggable data to a variable)
//add an event listener to the target element with the 'dragstart' event
//optionally, to make other elements interact when they are being dragged over, add 'dragover' event
//normally, you can create a class that indicates that the element is being dragged over
//apply it when on the 'dragenter'. event and remove it on the 'dragleave' event.
//PS: Não use 'dragover', because it will trigger multiple times.
//also, prevent the default on the dragover event
//to handle the 'drop' event, use e.stopPropagation() to stop the default action.
//para armazenar qual data você está dragging, use e.dataTransfer.setData(type, payload)
//armazene essa informação no dragstart, for example:

function handleDragStart(e) {
    this.style.opacity = '0.4';
  
    dragSourceElement = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

//no evento drop, para pegar a data que fora armazenada por setData(), use e.dataTransfer.getData(type)
//also check if the drop target is not the same as the dragstart target, for example:
function handleDrop(e) {
    e.stopPropagation();
  
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }

//Objective: swap the position of the cards in hand
//Logic: as I drag the card, I pass a string
