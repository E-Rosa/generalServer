export function saveId(id: string):void{
    window.sessionStorage.removeItem('noteID');
    window.sessionStorage.setItem('noteID', id);
}