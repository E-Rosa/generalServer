import { METHODS } from "http";
import { Note } from "../models/noteModel";

export function getAllNotes(): any {
  return fetch("http://localhost:5000/api/dailyJournal/notes");
}
export function getNoteById(id: string): any {
  return fetch(`http://localhost:5000/api/dailyJournal/notes/${id}`);
}
export function putNoteById(id: string, note: Note): any {
  return fetch(`http://localhost:5000/api/dailyJournal/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
}
export function deleteNoteById(id: string): any {
  return fetch(`http://localhost:5000/api/dailyJournal/notes/${id}`, {
    method: "DELETE",
  });
}
export function postNote(note: Note): any {
    return fetch(`http://localhost:5000/api/dailyJournal/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  }
  export function getNotesByDate(date: string): any {
    return fetch(`http://localhost:5000/api/dailyJournal/notes/date/${date}`);
  }
