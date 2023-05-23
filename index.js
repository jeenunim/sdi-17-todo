var todo = [];   // array to hold to-do list items

const addItem = (task) => {
    todo.push(task);
}

let btn = document.querySelector("#button1");

let addTaskAction = () => {
    
}
let myClick = () => {
    const response = confirm('Do you want to add a new task?');
    if (response) {
        let newTask = document.createElement("li");
        var x = document.createElement("INPUT");
        x.setAttribute("type", "text")
        x.setAttribute("placeholder", "Add new task.");
        newTask.appendChild(x);
        let list = document.querySelector("#list");
        list.appendChild(newTask);
    } else {
        alert("Action cancelled.");
    }

}

btn.addEventListener("click", myClick)
