//initializes task count
let taskCount = 0;
taskCount++;

//acesses data in the database in the frontend and creates them in the front-end
function getData(){
    fetch('http://localhost:5000/api/taskManager/tasks') //returns promise
    .then(res => res.json())   //returns promise
    .then((data) => {            //returns data in array
                    const newData = data;
                    //adds task (visually) using task_title from the array
                    for (let i=0; i<newData.length; i++){
                        addInitialTasks(newData[i].task_title);
                    }
    });}
getData();

//selects DOM elements
let tasksContainer = document.querySelector(".tasks-container");
let addButton = document.querySelector(".add_button");

//adds listeners to DOM elements
addButton.addEventListener("click", addNewTask);

//given the title parameter, makes a post request with the title in the body. Returns the body.
function postData(taskTitle){
    fetch('http://localhost:5000/api/taskManager/tasks',{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            task_title: taskTitle,
        })    
    })
    .then(res =>{
        console.log(res.json());
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
}

//turns the task title editable
function makeEditable(){
    //accesses the closest input
    let taskTitle = this.parentNode.parentNode.firstChild;

    //modifies the closest input (make it editable)
    taskTitle.contentEditable = true;
    taskTitle.style.borderBottom = "1px solid rgb(109, 52, 71)";

    //does something when press 'enter' on the closest input
    taskTitle.addEventListener("keypress", sendData);
    taskTitle.previousTitle = taskTitle.innerHTML;
};

//when user presses 'enter', delete or post data.
function sendData(){
    if (event.key === "Enter"){
        //takes away the 'change line when press enter' deafult browser settings
        event.preventDefault();
        if(!this.innerHTML){
            //make the task title go back to initial state
            this.innerHTML = this.previousTitle;
        }
        else{
            //posts the data in the database.
            postData(this.innerHTML);
            //deletes the task with the previous title
            deleteData(this.previousTitle);
        }
        this.contentEditable = false;
        this.style.borderBottom = "0px";
    }
}

//sends a request to delete data based on task_title (the actual deletion occurs in the API)
function deleteData(task_title){
    fetch(`http://localhost:5000/api/taskManager/tasks/${task_title}`,{method: 'DELETE'})
    .then(console.log('delete sucessfull'));
}

//adds a task (visually)
function addNewTask(task_title){
    //add one task counter
    taskCount++;

    //create elements
    let singleTaskContainer = document.createElement("div");
    let taskTitle = document.createElement("div");
    let iconContainer = document.createElement("div");
    let editIcon = document.createElement("img");
    let deleteIcon = document.createElement("img");

    //attach attributes to elements
    singleTaskContainer.className="single-task-container";
    taskTitle.className = "task";
    taskTitle.id = `task${taskCount}`;
    taskTitle.innerHTML = task_title;
    taskTitle.contentEditable = true;
    taskTitle.style.borderBottom = "1px solid rgb(109, 52, 71)";
    taskTitle.addEventListener("keypress", sendData);
    iconContainer.className = "icon-container";
    editIcon.className = "icon";
    editIcon.id=`edit${taskCount}`;
    editIcon.src="./assets/Edit-icon.png";
    editIcon.addEventListener("click", makeEditable);
    deleteIcon.className = "icon";
    deleteIcon.id="delete";
    deleteIcon.src="./assets/Delete-icon.png";
    deleteIcon.addEventListener("click", deleteTask);

    //append elements to body
    tasksContainer.appendChild(singleTaskContainer);
    singleTaskContainer.appendChild(taskTitle);
    singleTaskContainer.appendChild(iconContainer);
    iconContainer.appendChild(editIcon);
    iconContainer.appendChild(deleteIcon);

    //substitute task name
    if(task_title == '[object PointerEvent]'){taskTitle.innerHTML = ''}
};

//adds the initial tasks when the page just loads.
function addInitialTasks(task_title){
        //add one task counter
        taskCount++;
        //create elements
        let singleTaskContainer = document.createElement("div");
        let taskTitle = document.createElement("div");
        let iconContainer = document.createElement("div");
        let editIcon = document.createElement("img");
        let deleteIcon = document.createElement("img");
    
        //attach attributes to elements
        singleTaskContainer.className="single-task-container";
        taskTitle.className = "task";
        taskTitle.id = `task${taskCount}`;
        taskTitle.innerHTML = task_title;
        iconContainer.className = "icon-container";
        editIcon.className = "icon";
        editIcon.id=`edit${taskCount}`;
        editIcon.src="./assets/Edit-icon.png";
        editIcon.addEventListener("click", makeEditable);
        deleteIcon.className = "icon";
        deleteIcon.id="delete";
        deleteIcon.src="./assets/Delete-icon.png";
        deleteIcon.addEventListener("click", deleteTask);
    
        //append elements to body
        tasksContainer.appendChild(singleTaskContainer);
        singleTaskContainer.appendChild(taskTitle);
        singleTaskContainer.appendChild(iconContainer);
        iconContainer.appendChild(editIcon);
        iconContainer.appendChild(deleteIcon);
    
        //substitute task name
        if(task_title == '[object PointerEvent]'){taskTitle.innerHTML = ''}
}

//removes a task (visually and permanently);
function deleteTask(){
    let taskContainer = this.parentNode.parentNode;
    let taskTitle = this.parentNode.parentNode.firstChild;
    taskContainer.remove();
    deleteData(taskTitle.innerHTML);
};

//removes a task given a specific name.
function deleteNamedTask(task){
    task.remove();
}



    