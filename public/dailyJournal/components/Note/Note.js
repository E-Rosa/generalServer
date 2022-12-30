"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesObj = void 0;
const DOM_js_1 = require("../../modules/DOM.js");
const href_js_1 = require("../../modules/href.js");
const fetch_js_1 = require("../../modules/fetch.js");
const sessionStorage_js_1 = require("../../modules/sessionStorage.js");
const PopUp_js_1 = require("../PopUp/PopUp.js");
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
                noteTitle.addEventListener('click', href_js_1.toNotePage);
            }
            editButton.addEventListener('click', toggleEditableWrap);
            deleteButton.addEventListener('click', deleteNoteWrap);
            function deleteNoteWrap() {
                PopUp_js_1.popUpObj.display('Are you sure you want to delete this note?', () => {
                    noteContainer.remove();
                    (0, fetch_js_1.deleteNoteById)(note.note_id);
                    (0, href_js_1.toIndexPage)();
                });
            }
            function toggleEditableWrap() {
                (0, DOM_js_1.toggleEditable)([noteTitle, noteText, tagsElement]);
            }
            function saveIdWrap() {
                (0, sessionStorage_js_1.saveId)(note.note_id);
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
                    (0, fetch_js_1.putNoteById)(NotesObj.id, newNote);
                    NotesObj.createNotes(parent, notes);
                    //location.reload();
                }
            }
        });
    }
};
exports.NotesObj = NotesObj;
