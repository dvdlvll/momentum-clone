function timeSensitiveGreetUser() {
  let today = new Date();
  let name = document.querySelector("#name-textbox").value;
  let greeting = "";

  /* error message if name is blank */
  if (name === "") {
    document.querySelector("#name-required").style.display = "block";
  } else {
    /* if-else statement for time-sensitive greeting */
    if (today.getHours() >= 4 && today.getHours() <= 11) {
      greeting = "Good morning, ";
    } else if (today.getHours() >= 12 && today.getHours() <= 17) {
      greeting = "Good afternoon, ";
    } else {
      greeting = "Good evening, ";
    }
    document.querySelector("#greeting").textContent = greeting + name;

    /* switch display of divs */
    document.querySelector(".name-container").style.display = "none";
    document.querySelector(".main-container").style.opacity = "1";
    document.querySelector(".todo-container").style.opacity = "1";
  }

  setInterval(timeSensitiveGreetUser, 1000);
}

/* enter key as submit */
let enterNameInput = document.querySelector("#name-textbox");
enterNameInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.querySelector("#name-submit").click();
  }
});
