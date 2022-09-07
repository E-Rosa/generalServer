import { NotesObj } from "../components/Note/Note.js";
import { getAllNotes, postNote } from '../modules/fetch.js';
import { Note } from '../models/noteModel.js';
import { SearchBarObj } from "../components/SearchBar/SearchBar.js";
let notesContainerIndex = document.getElementById('notes-container-index');
let addNoteButton = document.getElementById('addNote-button');
let utilitiesContainer = document.getElementById('utilities-container');
addNoteButton === null || addNoteButton === void 0 ? void 0 : addNoteButton.addEventListener('click', addNewNote);
let notesState = [];
SearchBarObj.displayDateBar(utilitiesContainer, notesContainerIndex);
function fetchAndDisplayNotes() {
    getAllNotes()
        .then((res) => {
        return res.json();
    })
        .then((notes) => {
        notesState = notes;
        NotesObj.createNotes(notesContainerIndex, notesState);
    });
}
fetchAndDisplayNotes();
function addNewNote() {
    let newNote = new Note('null', 'Insert Title', 'Insert Text', 'null', 'no-tags');
    postNote(newNote);
    while (notesContainerIndex.firstChild) {
        let lastChild = notesContainerIndex.lastChild;
        notesContainerIndex.removeChild(lastChild);
    }
    fetchAndDisplayNotes();
}
