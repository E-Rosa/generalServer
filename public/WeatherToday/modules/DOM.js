"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnFlexContainer = void 0;
function returnFlexContainer(direction, id) {
    let container = document.createElement('div');
    container.id = id;
    container.style.display = 'flex';
    container.style.flexDirection = direction;
    return container;
}
exports.returnFlexContainer = returnFlexContainer;
