"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnNoteObjects = exports.Note = void 0;
class Note {
    constructor(note_id, note_title, note_text, note_creationDate, note_tags) {
        this.note_id = note_id;
        this.note_title = note_title;
        this.note_text = note_text;
        this.note_creationDate = note_creationDate;
        this.note_tags = note_tags;
    }
}
exports.Note = Note;
;
function returnNoteObjects(dbdata) {
    let notes = [];
    if (dbdata.rowCount) {
        for (let i = 0; i < dbdata.rowCount; i++) {
            let noteId = dbdata.rows[i].note_id;
            let noteTitle = dbdata.rows[i].note_title;
            let noteText = dbdata.rows[i].note_text;
            let noteCreationDate = dbdata.rows[i].note_creationdate;
            let noteTags = dbdata.rows[i].note_tags;
            notes.push(new Note(noteId, noteTitle, noteText, noteCreationDate, noteTags));
        }
    }
    else {
        return notes;
    }
    return notes;
}
exports.returnNoteObjects = returnNoteObjects;
;
