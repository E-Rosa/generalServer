"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_js_1 = require("../modules/fetch.js");
const Note_js_1 = require("../components/Note/Note.js");
let noteContainer = document.getElementById('note-container');
let noteId = window.sessionStorage.getItem('noteID');
let editButton = document.getElementById('edit-button');
let noteState = [];
(0, fetch_js_1.getNoteById)(noteId)
    .then((res) => { return res.json(); })
    .then((noteObject) => {
    noteState = noteObject;
    Note_js_1.NotesObj.createNotes(document.body, noteObject);
});
