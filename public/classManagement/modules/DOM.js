import { toStudent } from "./href.js";
function createStudentCard(name, status, id, parent) {
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
    function saveSession() {
        window.sessionStorage.removeItem("student_id");
        window.sessionStorage.setItem("student_id", id);
    }
}
function fillStudentProfileDOM(data) {
    let idInput = document.getElementById("id-input");
    let nameInput = document.getElementById("name-input");
    let birthdayInput = document.getElementById("birthday-input");
    let cityInput = document.getElementById("city-input");
    let levelInput = document.getElementById("level-input");
    let subscriptionInput = document.getElementById("subscription-input");
    let frequencyInput = document.getElementById("frequency-input");
    let descriptionInput = document.getElementById("description-input");
    let teacherNameInput = document.getElementById("teachername-input");
    let statusInput = document.getElementById("status-input");
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
function returnStudentProfile() {
    let idInput = document.getElementById("id-input");
    let nameInput = document.getElementById("name-input");
    let birthdayInput = document.getElementById("birthday-input");
    let cityInput = document.getElementById("city-input");
    let levelInput = document.getElementById("level-input");
    let subscriptionInput = document.getElementById("subscription-input");
    let frequencyInput = document.getElementById("frequency-input");
    let descriptionInput = document.getElementById("description-input");
    let teacherNameInput = document.getElementById("teachername-input");
    let statusInput = document.getElementById("status-input");
    return ({
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
    });
}
function extractDOMtoObject(element, object, inputType, propertyName) {
    if (inputType === 'input') {
        return Object.assign(Object.assign({}, object), { [propertyName]: element.value });
    }
    else {
        return Object.assign(Object.assign({}, object), { [propertyName]: element.textContext });
    }
}
function popUpMessage(msg, parent, msgType) {
    //create elements
    let container = document.createElement('div');
    let message = document.createElement('span');
    container.style.position = 'absolute';
    container.style.height = '100vh';
    container.style.width = '100vw';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.backgroundColor = 'grey';
    container.style.opacity = '90%';
    container.style.animation = 'all .5s ease';
    message.style.padding = '1em';
    message.style.color = 'white';
    message.style.fontFamily = 'sans-serif';
    message.style.borderRadius = '20px';
    message.textContent = msg;
    if (msgType === 'error') {
        message.style.backgroundColor = 'red';
        setTimeout(closeWindow, 3000);
    }
    else if (msgType === 'success') {
        message.style.backgroundColor = 'green';
        setTimeout(closeWindow, 1000);
    }
    parent.appendChild(container);
    container.appendChild(message);
    function closeWindow() {
        container.remove();
    }
}
export { createStudentCard, fillStudentProfileDOM, extractDOMtoObject, returnStudentProfile, popUpMessage };
//tsc --module es6 ./public/modules/DOM.ts
