"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Note_js_1 = require("../components/Note/Note.js");
const fetch_js_1 = require("../modules/fetch.js");
const noteModel_js_1 = require("../models/noteModel.js");
const SearchBar_js_1 = require("../components/SearchBar/SearchBar.js");
let notesContainerIndex = document.getElementById('notes-container-index');
let addNoteButton = document.getElementById('addNote-button');
let utilitiesContainer = document.getElementById('utilities-container');
addNoteButton === null || addNoteButton === void 0 ? void 0 : addNoteButton.addEventListener('click', addNewNote);
let notesState = [];
SearchBar_js_1.SearchBarObj.displayDateBar(utilitiesContainer, notesContainerIndex);
function fetchAndDisplayNotes() {
    (0, fetch_js_1.getAllNotes)()
        .then((res) => {
        return res.json();
    })
        .then((notes) => {
        notesState = notes;
        Note_js_1.NotesObj.createNotes(notesContainerIndex, notesState);
    });
}
fetchAndDisplayNotes();
function addNewNote() {
    let newNote = new noteModel_js_1.Note('null', 'Insert Title', 'Insert Text', 'null', 'no-tags');
    (0, fetch_js_1.postNote)(newNote);
    while (notesContainerIndex.firstChild) {
        let lastChild = notesContainerIndex.lastChild;
        notesContainerIndex.removeChild(lastChild);
    }
    fetchAndDisplayNotes();
}
