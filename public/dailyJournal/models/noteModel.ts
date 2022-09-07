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

export{
    Note
}