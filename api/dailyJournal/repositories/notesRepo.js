"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotesByDate = exports.postNote = exports.deleteNoteById = exports.putNote = exports.getNoteById = exports.getAllNotes = void 0;
const db = require('../configuration/dbConnection.js');
function getAllNotes() {
    return db.client.query("SELECT note_id,note_title,note_text,to_char(note_creationdate, 'DD-MM-YYYY') as note_creationdate,note_tags FROM notes");
}
exports.getAllNotes = getAllNotes;
function getNoteById(id) {
    return db.client.query("SELECT note_id,note_title,note_text,to_char(note_creationdate, 'DD-MM-YYYY') as note_creationdate,note_tags FROM notes WHERE note_id=$1", [id]);
}
exports.getNoteById = getNoteById;
function putNote(note) {
    return db.client.query("UPDATE notes SET note_title=$2, note_text=$3, note_tags=$4 WHERE note_id =$1", [note.note_id, note.note_title, note.note_text, note.note_tags]);
}
exports.putNote = putNote;
function deleteNoteById(id) {
    return db.client.query("DELETE FROM notes WHERE note_id=$1", [id]);
}
exports.deleteNoteById = deleteNoteById;
function postNote(note) {
    return db.client.query("INSERT INTO notes (note_id, note_title, note_text, note_tags) VALUES (uuid_generate_v4(), $1, $2, $3)", [note.note_title, note.note_text, note.note_tags]);
}
exports.postNote = postNote;
function getNotesByDate(date) {
    return db.client.query("SELECT note_id,note_title,note_text,to_char(note_creationdate, 'DD-MM-YYYY') as note_creationdate,note_tags FROM notes WHERE note_creationdate >= $1", [date]);
}
exports.getNotesByDate = getNotesByDate;
