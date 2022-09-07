import { Note } from "../models/noteModel";

const db = require('../configuration/dbConnection.js');

export function getAllNotes(): Promise<object[]>{
    return db.client.query("SELECT note_id,note_title,note_text,to_char(note_creationdate, 'DD-MM-YYYY') as note_creationdate,note_tags FROM notes");
}

export function getNoteById(id: string): Promise<object[]>{
    return db.client.query("SELECT note_id,note_title,note_text,to_char(note_creationdate, 'DD-MM-YYYY') as note_creationdate,note_tags FROM notes WHERE note_id=$1", [id]);
}

export function putNote(note: Note): Promise<object[]>{
    return db.client.query("UPDATE notes SET note_title=$2, note_text=$3, note_tags=$4 WHERE note_id =$1", [note.note_id, note.note_title, note.note_text, note.note_tags]);
}
export function deleteNoteById(id: string): Promise<object[]>{
    return db.client.query("DELETE FROM notes WHERE note_id=$1", [id]);
}
export function postNote(note: Note): Promise<object[]>{
    return db.client.query("INSERT INTO notes (note_id, note_title, note_text, note_tags) VALUES (uuid_generate_v4(), $1, $2, $3)", [note.note_title, note.note_text, note.note_tags]);
}
export function getNotesByDate(date: string): Promise<object[]>{
    return db.client.query("SELECT note_id,note_title,note_text,to_char(note_creationdate, 'DD-MM-YYYY') as note_creationdate,note_tags FROM notes WHERE note_creationdate >= $1", [date]);
}