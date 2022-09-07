import {getNoteById} from '../modules/fetch.js';
import {Note} from '../models/noteModel.js';
import {NotesObj} from '../components/Note/Note.js';
import {toggleEditable} from '../modules/DOM.js';

let noteContainer = document.getElementById('note-container') as HTMLElement;
let noteId= window.sessionStorage.getItem('noteID') as string;
let editButton = document.getElementById('edit-button') as HTMLElement;

let noteState: Note[] = [];

getNoteById(noteId)
.then((res: any)=>{return res.json()})
.then((noteObject: Note[])=>{
    noteState = noteObject;
    NotesObj.createNotes(document.body, noteObject);
});


