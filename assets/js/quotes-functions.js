/* variables */
let quoteContainer = document.querySelector(".quote-container");
let quoteAdd = document.querySelector(".quote-add-container");
let quote = document.querySelector("#quote");
let quoteList = [
  "A crisis is an opportunity riding the dangerous wind.",
  "It's better to be without a book than to believe a book entirely.",
  "A little impatience will spoil great plans.",
  "A journey of a thousand miles begins with a single step.",
  "Be not afraid of growing slowly, be afraid only of standing still.",
  "All things change, and we change with them.",
  "There are two kinds of perfect people: those who are dead, and those who have not been born yet.",
  "Distant water does not put out a nearby fire.",
  "One beam, no matter how big, cannot support an entire house on its own.",
  "Patience is a bitter plant, but its fruit is sweet.",
  "Habits are cobwebs at first; cables at last.",
  "He who asks is a fool for five minutes, but he who does not ask remains a fool forever.",
  "Better a diamond with a flaw than a pebble without one.",
];

/* display random quote at startup / next quote button function */
function randomQuote() {
  let randomQuote = Math.floor(Math.random() * quoteList.length);
  quote.textContent = quoteList[randomQuote];
}
randomQuote();

/* display add quote container */
function showQuoteAddContainer() {
  quoteContainer.style.display = "none";
  quoteAdd.style.display = "block";
}

/* add new quote to quote list */
function addQuote() {
  let newQuote = document.querySelector("#quote-new").value;

  if (newQuote !== "") {
    quoteList.push(newQuote);

    quoteContainer.style.display = "block";
    quoteAdd.style.display = "none";
    console.log(quoteList);
  } else {
    quoteContainer.style.display = "block";
    quoteAdd.style.display = "none";
  }
}

/* keyboard functionalities */
let enterQuoteInput = document.querySelector("#quote-new");
enterQuoteInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.querySelector("#quote-submit").click();
  } else if (event.key === "Escape") {
    quoteContainer.style.display = "block";
    quoteAdd.style.display = "none";
  }
});
