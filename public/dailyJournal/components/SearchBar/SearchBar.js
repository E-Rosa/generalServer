"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBarObj = void 0;
const fetch_js_1 = require("../../modules/fetch.js");
const Note_js_1 = require("../Note/Note.js");
exports.SearchBarObj = {
    displayDateBar: (parent, notesContainer) => {
        let searchBarInput = document.createElement('input');
        searchBarInput.placeholder = 'YYYY-MM-DD';
        searchBarInput.type = 'date';
        searchBarInput.style.maxHeight = '30px';
        searchBarInput.addEventListener('keypress', searchByDateWrap);
        parent.appendChild(searchBarInput);
        function searchByDateWrap(e) {
            if (e.key == 'Enter') {
                e.preventDefault();
                (0, fetch_js_1.getNotesByDate)(searchBarInput.value)
                    .then((res) => { return res.json(); })
                    .then((notes) => {
                    while (notesContainer.firstChild) {
                        let lastChild = notesContainer.lastChild;
                        notesContainer.removeChild(lastChild);
                    }
                    ;
                    Note_js_1.NotesObj.createNotes(notesContainer, notes);
                });
            }
        }
    }
};
