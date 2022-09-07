import { getNoteById } from '../modules/fetch.js';
import { NotesObj } from '../components/Note/Note.js';
let noteContainer = document.getElementById('note-container');
let noteId = window.sessionStorage.getItem('noteID');
let editButton = document.getElementById('edit-button');
let noteState = [];
getNoteById(noteId)
    .then((res) => { return res.json(); })
    .then((noteObject) => {
    noteState = noteObject;
    NotesObj.createNotes(document.body, noteObject);
});
