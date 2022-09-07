import {NotesObj} from "../components/Note/Note.js";
import {getAllNotes, postNote} from '../modules/fetch.js';
import {Note} from '../models/noteModel.js';
import {SearchBarObj} from "../components/SearchBar/SearchBar.js";

let notesContainerIndex = document.getElementById('notes-container-index') as HTMLElement;
let addNoteButton = document.getElementById('addNote-button');
let utilitiesContainer = document.getElementById('utilities-container');

addNoteButton?.addEventListener('click', addNewNote);

let notesState: Note[] = [];

SearchBarObj.displayDateBar(utilitiesContainer, notesContainerIndex);

function fetchAndDisplayNotes(): void{
    getAllNotes()
    .then((res: any)=>{
        return res.json();
    })
    .then((notes: Note[])=>{
        notesState = notes;
        NotesObj.createNotes(notesContainerIndex, notesState);
    });
}
fetchAndDisplayNotes();


function addNewNote(){
    let newNote = new Note('null', 'Insert Title', 'Insert Text', 'null', 'no-tags');
    postNote(newNote);
    while(notesContainerIndex.firstChild){
        let lastChild = notesContainerIndex.lastChild as Node;
        notesContainerIndex.removeChild(lastChild);
    }
    fetchAndDisplayNotes();
}



    

