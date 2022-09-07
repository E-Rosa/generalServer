import { Note } from "../../models/noteModel";
import { getNotesByDate } from "../../modules/fetch.js";
import { NotesObj } from "../Note/Note.js";

export let SearchBarObj = {
   
    displayDateBar: (parent: any, notesContainer: any)=>{
        let searchBarInput = document.createElement('input');
        searchBarInput.placeholder = 'YYYY-MM-DD';  
        searchBarInput.type='date';
        searchBarInput.style.maxHeight='30px';
        searchBarInput.addEventListener('keypress', searchByDateWrap);
        parent.appendChild(searchBarInput);

        function searchByDateWrap(e:any){
            if(e.key == 'Enter'){
                e.preventDefault();
                getNotesByDate(searchBarInput.value)
                .then((res: any)=>{return res.json()})
                .then((notes: any)=>{
                    while (notesContainer.firstChild){
                        let lastChild = notesContainer.lastChild as Node;
                        notesContainer.removeChild(lastChild);
                    };
                    NotesObj.createNotes(notesContainer, notes);
                })
            }
        }
    }
}