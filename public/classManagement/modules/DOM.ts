import { StudentProfile } from "../models/studentProfile.js";
import { toStudent } from "./href.js";

function createStudentCard(
  name: string,
  status: string,
  id: string,
  parent: HTMLElement
): void {
  let container = document.createElement("section");
  let student_name = document.createElement("span");
  let student_status = document.createElement("span");
  let student_id = document.createElement("span");

  container.className = "student-card-container";
  student_status.id = "status";

  student_status.innerText = "Status: " + status;
  student_name.innerText = name;
  student_id.innerText = id;
  student_id.style.fontWeight = "200";
  container.style.fontSize = ".8em";
  container.style.padding = ".6em 1em .6em 1em";

  container.addEventListener("click", toStudent);
  container.addEventListener("click", saveSession);

  parent.appendChild(container);
  container.appendChild(student_name);
  container.appendChild(student_status);
  container.appendChild(student_id);

  function saveSession(): void {
    window.sessionStorage.removeItem("student_id");
    window.sessionStorage.setItem("student_id", id);
  }
}

function fillStudentProfileDOM(data: any) {
  let idInput: HTMLSpanElement = document.getElementById(
    "id-input"
  ) as HTMLSpanElement;
  let nameInput: HTMLSpanElement = document.getElementById(
    "name-input"
  ) as HTMLSpanElement;
  let birthdayInput: HTMLSpanElement = document.getElementById(
    "birthday-input"
  ) as HTMLSpanElement;
  let cityInput: HTMLSpanElement = document.getElementById(
    "city-input"
  ) as HTMLSpanElement;
  let levelInput: HTMLSpanElement = document.getElementById(
    "level-input"
  ) as HTMLSpanElement;
  let subscriptionInput: HTMLSpanElement = document.getElementById(
    "subscription-input"
  ) as HTMLSpanElement;
  let frequencyInput: HTMLSpanElement = document.getElementById(
    "frequency-input"
  ) as HTMLSpanElement;
  let descriptionInput: HTMLSpanElement = document.getElementById(
    "description-input"
  ) as HTMLSpanElement;
  let teacherNameInput: HTMLSpanElement = document.getElementById(
    "teachername-input"
  ) as HTMLSpanElement;
  let statusInput: HTMLSpanElement = document.getElementById(
    "status-input"
  ) as HTMLSpanElement;

  idInput.innerText = data.id;
  nameInput.innerText = data.name;
  birthdayInput.innerText = data.birthday;
  cityInput.innerText = data.city;
  levelInput.innerText = data.level;
  subscriptionInput.innerText = data.subscription;
  frequencyInput.innerText = data.frequency;
  descriptionInput.innerText = data.description;
  teacherNameInput.innerText = data.teacher_name;
  statusInput.innerText = data.status;
  }

  function returnStudentProfileFromPg(): any{
    let idInput: HTMLSpanElement = document.getElementById(
      "id-input"
    ) as HTMLSpanElement;
    let nameInput: HTMLSpanElement = document.getElementById(
      "name-input"
    ) as HTMLSpanElement;
    let birthdayInput: HTMLSpanElement = document.getElementById(
      "birthday-input"
    ) as HTMLSpanElement;
    let cityInput: HTMLSpanElement = document.getElementById(
      "city-input"
    ) as HTMLSpanElement;
    let levelInput: HTMLSpanElement = document.getElementById(
      "level-input"
    ) as HTMLSpanElement;
    let subscriptionInput: HTMLSpanElement = document.getElementById(
      "subscription-input"
    ) as HTMLSpanElement;
    let frequencyInput: HTMLSpanElement = document.getElementById(
      "frequency-input"
    ) as HTMLSpanElement;
    let descriptionInput: HTMLSpanElement = document.getElementById(
      "description-input"
    ) as HTMLSpanElement;
    let teacherNameInput: HTMLSpanElement = document.getElementById(
      "teachername-input"
    ) as HTMLSpanElement;
    let statusInput: HTMLSpanElement = document.getElementById(
      "status-input"
    ) as HTMLSpanElement;

    return (
      {
        status: statusInput.textContent,
        teacher_name: teacherNameInput.textContent,
        description: descriptionInput.textContent,
        frequency: frequencyInput.textContent,
        subscription: subscriptionInput.textContent,
        level: levelInput.textContent,
        city: cityInput.textContent,
        birthday: birthdayInput.textContent,
        name: nameInput.textContent,
        id: idInput.textContent
      }
    )
  }

function extractDOMtoObject(
  element: any,
  object: any,
  inputType: string,
  propertyName: string
): object {
  if(inputType === 'input'){
    return {
      ...object,
      [propertyName]: element.value
    };
  }else{
    return {
      ...object,
      [propertyName]: element.textContext
    };
  }
}

function popUpMessage(msg: any, parent: any, msgType: string): void{
    //create elements
    let container = document.createElement('div');
    let message = document.createElement('span');

    container.style.position='absolute';
    container.style.height='100vh';
    container.style.width='100vw';
    container.style.display='flex';
    container.style.justifyContent='center';
    container.style.alignItems='center';
    container.style.backgroundColor='grey';
    container.style.opacity='90%';
    container.style.animation='all .5s ease';

    message.style.padding='1em';
    message.style.color='white';
    message.style.fontFamily='sans-serif';
    message.style.borderRadius = '20px';
    message.textContent=msg;

    if (msgType === 'error'){
      message.style.backgroundColor='red';
      setTimeout(closeWindow, 3000);
    }else if (msgType === 'success'){
      message.style.backgroundColor='green';
      setTimeout(closeWindow, 1000);
    }

    parent.appendChild(container);
    container.appendChild(message);

    function closeWindow(){
      container.remove();
    } 
}

export { createStudentCard, fillStudentProfileDOM, extractDOMtoObject, returnStudentProfileFromPg, popUpMessage };

//tsc --module es6 ./public/modules/DOM.ts
