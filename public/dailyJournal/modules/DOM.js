"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleEditable = void 0;
function toggleEditable(targetElements) {
    targetElements.forEach((element) => {
        if (element.isContentEditable) {
            element.contentEditable = 'false';
            element.style.borderBottom = '0';
        }
        else {
            element.contentEditable = 'true';
            element.style.borderBottom = '1px solid grey';
        }
    });
}
exports.toggleEditable = toggleEditable;
;
