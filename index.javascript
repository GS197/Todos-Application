let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];



addTodoButton.onclick = function() {
    onAddTodo()
}

function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    console.log(checkboxElement.checked);

    let labelElement1 = document.getElementById(labelId)

    if (checkboxElement.checked === true) {
        labelElement1.classList.add("checked");
    } else {
        labelElement1.classList.remove("checked");
    }
}

function onDeleteTodo(todoId) {
    let todoElement1 = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement1);
}

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;


    let todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    }
    todoElement.appendChild(inputElement);



    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.id = labelId
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}



function onAddTodo() {
    let todocount = todoList.length;
    todocount = todocount + 1;
    let userInputElement = document.getElementById("todoUserInput");
    let userInputvalue = userInputElement.value;
    let newTodo = {
        text: userInputvalue,
        uniqueNo: todocount
    };
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}