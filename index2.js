var todo = [];   // array to hold to-do list items
const addItem = (task) => {
    todo.push(task);
}

let btn = document.querySelector("#submit");

let myClick = () => {
    const response = confirm('Do you want to add a new task?');
    if (response) {
        let input = document.getElementById("userInput").value;
        let newTask = document.getElementsByClassName("added-task")
        newTask.appendChild(input);
    } else {
        alert("Action cancelled.");
    }

}

btn.addEventListener("click", myClick)
