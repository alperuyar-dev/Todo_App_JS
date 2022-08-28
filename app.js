const taskButton = document.getElementById("task-button");
const todo = document.getElementById("todo");
const completed = document.getElementById("completed");
const taskEntry = document.getElementById("task-entry");

function taskClick() {
  if (taskEntry.value === "") {
    todoItem.remove();
  }
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const childDiv = document.createElement("div");

  const todoDelete = document.createElement("button");
  todoDelete.classList.add("todo-delete");
  todoDelete.addEventListener("click", () => todoItem.remove());

  todoItem.innerText = taskEntry.value;
  taskEntry.value = "";

  const todoDone = document.createElement("button");
  todoDone.classList.add("todo-done");
  todoDone.addEventListener("click", () => {
    const completedItem = document.createElement("div");
    completedItem.classList.add("completed-item");
    todoItem.remove();
    completed.append(completedItem);
    completedItem.innerText = todoItem.textContent;
    completedItem.append(todoDelete);
    todoDelete.addEventListener("click", () => completedItem.remove());
  });
  todoItem.append(childDiv);
  childDiv.append(todoDone, todoDelete);
  todo.append(todoItem);
}

taskButton.addEventListener("click", taskClick);
