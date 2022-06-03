/* variables */
let goalAddContainer = document.querySelector(".goal-add-container");
let goalContainer = document.querySelector(".goal-container");
let goal = document.querySelector("#goal-textbox");
let goalText = document.querySelector("#goal-text");

/* set goal for the day */
function getGoal() {
  if (goal !== "") {
    goalText.textContent = goal.value;
    goalAddContainer.style.display = "none";
    goalContainer.style.display = "block";
  }
}

/* enter key as submit */
let enterGoalInput = document.querySelector("#goal-textbox");
enterGoalInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.querySelector("#goal-submit").click();
  }
});

/* remove / reset goal */
function removeGoal() {
  goal.value = "";
  goalContainer.style.display = "none";
  goalAddContainer.style.display = "flex";
  document.querySelector("#goal-checkbox").checked = false;
}
