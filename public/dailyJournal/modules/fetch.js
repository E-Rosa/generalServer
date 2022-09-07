export function getAllNotes() {
    return fetch("http://localhost:5000/api/dailyJournal/notes");
}
export function getNoteById(id) {
    return fetch(`http://localhost:5000/api/dailyJournal/notes/${id}`);
}
export function putNoteById(id, note) {
    return fetch(`http://localhost:5000/api/dailyJournal/notes/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
    });
}
export function deleteNoteById(id) {
    return fetch(`http://localhost:5000/api/dailyJournal/notes/${id}`, {
        method: "DELETE",
    });
}
export function postNote(note) {
    return fetch(`http://localhost:5000/api/dailyJournal/notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
    });
}
export function getNotesByDate(date) {
    return fetch(`http://localhost:5000/api/dailyJournal/notes/date/${date}`);
}
