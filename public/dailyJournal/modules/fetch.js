"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotesByDate = exports.postNote = exports.deleteNoteById = exports.putNoteById = exports.getNoteById = exports.getAllNotes = void 0;
function getAllNotes() {
    return fetch("http://localhost:5000/api/dailyJournal/notes");
}
exports.getAllNotes = getAllNotes;
function getNoteById(id) {
    return fetch(`http://localhost:5000/api/dailyJournal/notes/${id}`);
}
exports.getNoteById = getNoteById;
function putNoteById(id, note) {
    return fetch(`http://localhost:5000/api/dailyJournal/notes/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
    });
}
exports.putNoteById = putNoteById;
function deleteNoteById(id) {
    return fetch(`http://localhost:5000/api/dailyJournal/notes/${id}`, {
        method: "DELETE",
    });
}
exports.deleteNoteById = deleteNoteById;
function postNote(note) {
    return fetch(`http://localhost:5000/api/dailyJournal/notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
    });
}
exports.postNote = postNote;
function getNotesByDate(date) {
    return fetch(`http://localhost:5000/api/dailyJournal/notes/date/${date}`);
}
exports.getNotesByDate = getNotesByDate;
