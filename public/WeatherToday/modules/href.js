"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toIndexPage = exports.toNotePage = void 0;
function toNotePage() {
    window.location.href = 'http://localhost:5000/dailyJournal/page-note/note.html';
}
exports.toNotePage = toNotePage;
function toIndexPage() {
    window.location.href = 'http://localhost:5000/dailyJournal/index.html';
}
exports.toIndexPage = toIndexPage;
