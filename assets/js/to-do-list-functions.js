function addTodo() {
  let todoInput = document.querySelector("#todo-textbox").value;
  let todoList = document.querySelector("#todo-ul");

  if (todoInput !== "") {
    /* creating elements after input */
    let listItem = document.createElement("li");
    let itemCheckbox = document.createElement("input");
    let itemContent = document.createElement("label");
    let itemDelete = document.createElement("button");

    /* adding properties to elements created */
    itemDelete.innerText = "×";
    itemCheckbox.type = "checkbox";
    itemContent.innerText = todoInput;
    listItem.style.listStyle = "none";

    /* adding classes to elements created */
    itemCheckbox.classList.add("todo-checkbox");
    itemDelete.classList.add("todo-delete");
    itemContent.classList.add("todo-item");

    /* append the elements */
    listItem.append(itemDelete);
    listItem.append(itemCheckbox);
    listItem.append(itemContent);
    todoList.append(listItem);

    /* reset textbox */
    document.querySelector("#todo-textbox").value = "";

    /* toggle for checked/unchecked class property for list */
    listItem.addEventListener("click", function () {
      if (itemCheckbox.checked == true) {
        itemCheckbox.checked = false;
        listItem.classList.remove("checked");
        console.log(listItem);
      } else {
        itemCheckbox.checked = true;
        listItem.classList.add("checked");
        console.log(listItem);
      }
    });

    /* delete list item */
    itemDelete.addEventListener("click", function () {
      listItem.remove();
    });
  }
}

/* keyboard functionalities */
let enterTodoInput = document.querySelector("#todo-textbox");
enterTodoInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.querySelector("#todo-submit").click();
  }
});
