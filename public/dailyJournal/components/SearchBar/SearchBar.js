import { getNotesByDate } from "../../modules/fetch.js";
import { NotesObj } from "../Note/Note.js";
export let SearchBarObj = {
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
                getNotesByDate(searchBarInput.value)
                    .then((res) => { return res.json(); })
                    .then((notes) => {
                    while (notesContainer.firstChild) {
                        let lastChild = notesContainer.lastChild;
                        notesContainer.removeChild(lastChild);
                    }
                    ;
                    NotesObj.createNotes(notesContainer, notes);
                });
            }
        }
    }
};
