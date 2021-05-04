document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // initialize newTaskForm, etc etc; declare its value. Reaching into the document and retrieving everything that has an id mentioned
  const newTaskForm = document.getElementById("create-task-form");

  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  const newTaskUl= document.getElementById("tasks");

  //calling addEventListener on newTaskForm; listens for "submit", creates new task when submit is posted
  newTaskForm.addEventListener("submit", createNewTask);
});


// declare const var createNewTask; it listens for the user event. 
const createNewTask = event => { 
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  // lists task description
  const newTask = document.createElement("li");
  // lists new task as an ordered list item
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  // adds new task to list


  event.target.reset();

};


// declare const appendNewTask
const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
