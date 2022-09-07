import {toAddClass} from '../modules/href.js';

let addClassBtn: HTMLButtonElement = document.getElementById('add-button') as HTMLButtonElement;

addClassBtn.addEventListener("click", toAddClass);

export{}

//tsc --module es6 ./public/p-classes/classes.ts