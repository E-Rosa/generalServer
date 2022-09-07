import {Note} from '../models/noteModel.js';

export function toggleEditable(targetElements: HTMLElement[]): void{
    targetElements.forEach((element)=>{
       if(element.isContentEditable){
            element.contentEditable = 'false';
            element.style.borderBottom = '0';
       }else{
            element.contentEditable = 'true';
            element.style.borderBottom = '1px solid grey';
       }
    })
};

