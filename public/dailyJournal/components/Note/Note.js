import { toggleEditable } from '../../modules/DOM.js';
import { toNotePage, toIndexPage } from '../../modules/href.js';
import { deleteNoteById, putNoteById } from '../../modules/fetch.js';
import { saveId } from '../../modules/sessionStorage.js';
import { popUpObj } from '../PopUp/PopUp.js';
var NotesObj = {
    title: '',
    text: '',
    id: '',
    creationDate: '',
    tags: '',
    createNotes: (parent, notes) => {
        notes.forEach((note) => {
            NotesObj.title = note.note_title;
            NotesObj.text = note.note_text;
            NotesObj.creationDate = note.note_creationDate;
            NotesObj.id = note.note_id;
            NotesObj.tags = note.note_tags;
            let noteContainer = document.createElement('section');
            let noteTitle = document.createElement('h3');
            let noteText = document.createElement('p');
            let buttonsContainer = document.createElement('section');
            let editButton = document.createElement('button');
            let deleteButton = document.createElement('button');
            let detailsBarContainer = document.createElement('section');
            let creationDateElement = document.createElement('span');
            let tagsElement = document.createElement('span');
            let isSingleNote = window.location.href === 'http://localhost:5000/dailyJournal/page-note/note.html' ? true : false;
            notes.length === 1 ? noteContainer.id = 'single-note-container' : noteContainer.id = 'note-container';
            noteTitle.id = 'note-title';
            noteText.id = 'note-text';
            noteTitle.key = 'note_title';
            noteText.key = 'note_text';
            tagsElement.key = 'note_tags';
            buttonsContainer.id = 'note-buttons-container';
            editButton.id = 'edit-button';
            deleteButton.id = 'delete-button';
            detailsBarContainer.id = 'details-bar-container';
            creationDateElement.id = 'creation-date-element';
            tagsElement.id = 'tags-element';
            noteTitle.textContent = NotesObj.title;
            noteText.textContent = NotesObj.text;
            creationDateElement.textContent = NotesObj.creationDate;
            let reducedTags = NotesObj.tags.split(',')[0] + ',' + NotesObj.tags.split(',')[1] + ',' + NotesObj.tags.split(',')[2];
            tagsElement.textContent = reducedTags.toString();
            parent.appendChild(noteContainer);
            noteContainer.appendChild(buttonsContainer);
            isSingleNote ? buttonsContainer.appendChild(editButton) : false;
            buttonsContainer.appendChild(deleteButton);
            noteContainer.appendChild(noteTitle);
            noteContainer.appendChild(detailsBarContainer);
            detailsBarContainer.appendChild(creationDateElement);
            detailsBarContainer.appendChild(tagsElement);
            noteContainer.appendChild(noteText);
            //if in single note page
            if (window.location.href === 'http://localhost:5000/dailyJournal/page-note/note.html') {
                noteTitle.addEventListener('keypress', updateNoteState);
                noteText.addEventListener('keypress', updateNoteState);
                tagsElement.addEventListener('keypress', updateNoteState);
                tagsElement.textContent = NotesObj.tags;
            }
            else {
                noteTitle.addEventListener('click', saveIdWrap);
                noteTitle.addEventListener('click', toNotePage);
            }
            editButton.addEventListener('click', toggleEditableWrap);
            deleteButton.addEventListener('click', deleteNoteWrap);
            function deleteNoteWrap() {
                popUpObj.display('Are you sure you want to delete this note?', () => {
                    noteContainer.remove();
                    deleteNoteById(note.note_id);
                    toIndexPage();
                });
            }
            function toggleEditableWrap() {
                toggleEditable([noteTitle, noteText, tagsElement]);
            }
            function saveIdWrap() {
                saveId(note.note_id);
            }
            function updateNoteState(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    noteContainer.remove();
                    let newNote = Object.assign(Object.assign({}, note), { [e.target.key]: e.target.textContent });
                    notes.pop();
                    notes.push(newNote);
                    console.log('updateNoteState');
                    console.log(NotesObj.id, newNote);
                    putNoteById(NotesObj.id, newNote);
                    NotesObj.createNotes(parent, notes);
                    //location.reload();
                }
            }
        });
    }
};
export { NotesObj };
