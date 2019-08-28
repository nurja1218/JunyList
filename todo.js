const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "todo";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function handleClick(event) {
    const btn = event.target;
    const li = btn.parentElement;
    toDoList.removeChild(li);
    const clearToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = clearToDos;
    saveToDos();
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", handleClick);
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toDos.length + 1;
    li.id = newId;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadToDos = localStorage.getItem(TODO_LS);
    if(loadToDos !== null){
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();