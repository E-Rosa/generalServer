"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveId = void 0;
function saveId(id) {
    window.sessionStorage.removeItem('noteID');
    window.sessionStorage.setItem('noteID', id);
}
exports.saveId = saveId;
