/* update date */
function updateDate() {
  let today = new Date();
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthName = month[today.getMonth()];
  let dayNumber = today.getDate();
  let dayName = day[today.getDay()];
  let yearNumber = today.getFullYear();

  let dateValue =
    dayName + ", " + dayNumber + " " + monthName + " " + yearNumber;
  let date = document.querySelector("#date");
  date.textContent = dateValue;
}

/* call date function */
updateDate();

/* concat 0 to single digits */
function concatSingleDigits(h) {
  if (h < 10) {
    return "0" + h;
  } else {
    return h;
  }
}

/* change time format */
function changeTimeFormat(h) {
  if (h > 12 && h !== 0) {
    return h - 12;
  } else if (h === 0) {
    return h + 12;
  } else {
    return h;
  }
}

/* toggle time formats */
let is24hour = false;
function toggleTimeFormat() {
  is24hour = !is24hour;
}

/* update time */
function updateTime() {
  let today = new Date();
  let hour12 = concatSingleDigits(changeTimeFormat(today.getHours()));
  let hour24 = concatSingleDigits(today.getHours());
  let minute = concatSingleDigits(today.getMinutes());
  let hoursContainer = document.querySelector("#hours");
  let minutesContainer = document.querySelector("#minutes");

  if (is24hour) {
    hoursContainer.textContent = hour24;
    minutesContainer.textContent = minute;
  } else {
    hoursContainer.textContent = hour12;
    minutesContainer.textContent = minute;
  }
}

/* call time function */
updateTime();

setInterval(() => {
  updateDate();
  updateTime();
}, 1000);

/* event listener for the toggle time format function */
let timeContainer = document.querySelector(".time-container");
timeContainer.addEventListener("click", toggleTimeFormat);
