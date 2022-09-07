export function saveId(id) {
    window.sessionStorage.removeItem('noteID');
    window.sessionStorage.setItem('noteID', id);
}
