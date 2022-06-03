/* Function for adding to-do list elements */
function addTodo() {
  let todoInput = document.querySelector("#todo-textbox").value;
  let todoList = document.querySelector("#todo-ul");

  if (todoInput !== "") {
    /* Elements to be inserted */
    let listItem = document.createElement("li");
    let itemCheckbox = document.createElement("input");
    let itemContent = document.createElement("label");
    let itemDelete = document.createElement("button");

    /* Changing content and properties of elements to be inserted */
    itemDelete.innerText = "×";
    itemCheckbox.type = "checkbox";
    itemContent.innerText = todoInput;
    listItem.style.listStyle = "none";

    /* Add class to elements for styling */
    itemCheckbox.classList.add("todo-checkbox");
    itemDelete.classList.add("todo-delete");
    itemContent.classList.add("todo-item");

    /* Apend elements to new list item */
    listItem.append(itemDelete);
    listItem.append(itemCheckbox);
    listItem.append(itemContent);
    todoList.append(listItem);

    /* Reset to-do input content */
    document.querySelector("#todo-textbox").value = "";

    /* Function and event listener for to-do toggle */
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

    /* Function and event listener for deleting to-do items */
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
