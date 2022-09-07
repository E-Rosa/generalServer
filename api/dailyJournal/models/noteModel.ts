class Note{
    note_id: string;
    note_title: string;
    note_text: string;
    note_creationDate: string;
    note_tags: string;
    constructor(
        note_id: string,
        note_title: string,
        note_text: string,
        note_creationDate: string,
        note_tags: string
    )
    {
        this.note_id= note_id;
        this.note_title=note_title;
        this.note_text=note_text;
        this.note_creationDate=note_creationDate;
        this.note_tags=note_tags;
    }
};

function returnNoteObjects(dbdata: any): object[]{
    let notes: object[]=[];
    if (dbdata.rowCount){
        for(let i=0; i<dbdata.rowCount; i++){
            let noteId = dbdata.rows[i].note_id;
            let noteTitle = dbdata.rows[i].note_title;
            let noteText = dbdata.rows[i].note_text;
            let noteCreationDate = dbdata.rows[i].note_creationdate;
            let noteTags = dbdata.rows[i].note_tags;
            notes.push(new Note(noteId, noteTitle, noteText, noteCreationDate, noteTags));
        }
    }else{
        return notes;
    }
    return notes;
};

export{
    Note, returnNoteObjects
}