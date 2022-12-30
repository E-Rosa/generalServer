import {validateStudentProfile} from "../modules/validation.js";
import {putStudentProfile} from "../modules/fetch.js";
import {popUpMessage} from "../modules/DOM.js";
class StudentProfile {
  id: string;
  name: string;
  birthday: string;
  city: string;
  level: string;
  subscription_date:Date;
  frequency: string;
  description: string;
  status: string;
  teacher_name: string;
  DOM: StudentProfileDOM
  constructor(
    id: string,
    name: string,
    birthday: string,
    city: string,
    level: string,
    subscription_date:Date,
    frequency: string,
    description: string,
    status: string,
    teacher_name: string
  ) {
    this.name = name;
    this.status = status;
    this.city = city;
    this.level = level;
    this.frequency = frequency;
    this.description = description;
    this.teacher_name = teacher_name;
    this.id = id;
    this.birthday = birthday;
    this.subscription_date=subscription_date;
    this.DOM = new StudentProfileDOM();
  }
  display(parent: HTMLElement){
    parent.appendChild(this.DOM.container);
    
    let idInput = document.createElement('span');
    idInput.id='id-input';
    idInput.className='student-info-input';
    idInput.contentEditable='true';
    idInput.textContent = this.id;
    this.DOM.inputContainers[0].appendChild(idInput);

    let birthdayInput = document.createElement('span');
    birthdayInput.id='birthday-input';
    birthdayInput.className='student-info-input';
    birthdayInput.contentEditable='true';
    birthdayInput.textContent = this.birthday;
    this.DOM.inputContainers[1].appendChild(birthdayInput);

    let nameInput = document.createElement('span');
    nameInput.id='name-input';
    nameInput.className='student-info-input';
    nameInput.contentEditable='true';
    nameInput.textContent = this.name;
    this.DOM.inputContainers[2].appendChild(nameInput);

    let cityInput = document.createElement('span');
    cityInput.id='city-input';
    cityInput.className='student-info-input';
    cityInput.contentEditable='true';
    cityInput.textContent = this.city;
    this.DOM.inputContainers[3].appendChild(cityInput);

    let levelInput = document.createElement('span');
    levelInput.id='level-input';
    levelInput.className='student-info-input';
    levelInput.contentEditable='true';
    levelInput.textContent = this.level;
    this.DOM.inputContainers[4].appendChild(levelInput);

    let subscriptionInput = document.createElement('span');
    subscriptionInput.id='susbcription-input';
    subscriptionInput.className='student-info-input';
    subscriptionInput.contentEditable='true';
    subscriptionInput.textContent = this.subscription_date.toString();
    this.DOM.inputContainers[5].appendChild(subscriptionInput);

    let frequencyInput = document.createElement('span');
    frequencyInput.id='frequency-input';
    frequencyInput.className='student-info-input';
    frequencyInput.contentEditable='true';
    frequencyInput.textContent = this.frequency;
    this.DOM.inputContainers[6].appendChild(frequencyInput);

    let descriptionInput = document.createElement('span');
    descriptionInput.id='description-input';
    descriptionInput.className='student-info-input';
    descriptionInput.contentEditable='true';
    descriptionInput.textContent = this.description;
    this.DOM.inputContainers[7].appendChild(descriptionInput);

    let teacherName = document.createElement('span');
    teacherName.id='teachername-input';
    teacherName.className='student-info-input';
    teacherName.contentEditable='true';
    teacherName.textContent = this.teacher_name;
    this.DOM.inputContainers[8].appendChild(teacherName);

    let statusInput = document.createElement('span');
    statusInput.id='status-input';
    statusInput.className='student-info-input';
    statusInput.contentEditable='true';
    statusInput.textContent = this.status;
    this.DOM.inputContainers[9].appendChild(statusInput);

    this.DOM.submitBtn.className='button';
    this.DOM.submitBtn.id='submit-button';
    this.DOM.submitBtn.textContent='Submit';
    this.DOM.submitBtn.addEventListener('click', ()=>{
      if (validateStudentProfile(this)) {
        putStudentProfile(this.id, this);
        popUpMessage("Success!", document.body, "success");
      } else {
        popUpMessage(
          "Not sent. City must have 50 characters or less. Name must have 150 characters or less.",
          document.body,
          "error"
        );
    }
    })
    this.DOM.container.appendChild(this.DOM.submitBtn);
  }
}

class StudentProfileDOM {
  id: HTMLElement;
  name: HTMLElement;
  birthday: HTMLElement;
  city: HTMLElement;
  level: HTMLElement;
  subscription_date:HTMLElement;
  frequency: HTMLElement;
  description: HTMLElement;
  status: HTMLElement;
  teacher_name: HTMLElement; 
  container: HTMLElement;
  title: HTMLElement;
  inputContainers: HTMLElement[];
  inputContainerLabels: HTMLElement[];
  submitBtn: HTMLElement;
  constructor(){
      this.id = document.createElement('span');
      this.name = document.createElement('span');
      this.birthday = document.createElement('span');
      this.city = document.createElement('span');
      this.level = document.createElement('span');
      this.subscription_date =document.createElement('span');
      this.frequency = document.createElement('span');
      this.description = document.createElement('span');
      this.status = document.createElement('span');
      this.teacher_name = document.createElement('span');
      this.container = document.createElement('section');
      this.container.id='student-profile-container';

      this.title = document.createElement('h2');
      this.title.className = 'title';
      this.title.textContent='Student Profile';
      this.container.appendChild(this.title);

      this.inputContainers = this.returnInputContainers();
      this.inputContainerLabels = this.returnInputContainerLabels();

      this.submitBtn = document.createElement('button');
  }
  returnInputContainers(): HTMLElement[]{
    let a: any = [];
    for(let i=0; i<9; i++){
      let inputContainer = document.createElement('section');
      inputContainer.className = 'student-info-container';
      this.container.appendChild(inputContainer);
      a.push(inputContainer);
    }
    return a
  }
  returnInputContainerLabels(): HTMLElement[]{
    let a: any = []
    for(let i=0; i<9; i++){
      let label = document.createElement('b');
      console.log(Object.keys(this)[i])
      label.textContent=Object.keys(this)[i];
      this.inputContainers[i].appendChild(label);
      a.push(label);
    }
    return a
  }
  
}

export { StudentProfile };

//tsc --module es6 ./public/models/studentProfile.ts
