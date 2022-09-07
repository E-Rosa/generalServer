const expressNotesRoute = require('express');
const notesRouter = expressNotesRoute.Router();
const db = require('../repositories/notesRepo.js');
const {returnNoteObjects} = require('../models/noteModel.js');

notesRouter.route('/')
.get((req:any, res:any)=>{
    console.log('/api/notes GET was hit');
    db.getAllNotes().then((notes:any)=>{
        const notesObject = returnNoteObjects(notes);
        res.json(notesObject);
    })
})
.post((req:any, res: any)=>{
    console.log('/api/notes POST was hit');
    db.postNote(req.body);
});

notesRouter.route('/date/:date')
.get((req:any, res:any)=>{
    console.log('/api/notes/date/:date GET was hit');
    db.getNotesByDate(req.params.date).then((notes:any)=>{
        const notesObject = returnNoteObjects(notes);
        res.json(notesObject);
    })
})

notesRouter.route('/:id')
.get((req:any, res:any)=>{
    console.log('/api/dailyJournal/notes/:id was hit with id: ' + req.params.id);
    db.getNoteById(req.params.id).then((note: object[])=>{
        const noteObject = returnNoteObjects(note);
        res.json(noteObject);
    })
})
.put((req: any, res: any)=>{
    console.log('/api/dailyJournal/:id PUT was hit');
    db.putNote(req.body);
})
.delete((req: any, res: any)=>{
    console.log('/api/dailyJournal/:id DELETE was hit');
    db.deleteNoteById(req.params.id);
})

module.exports=notesRouter;
