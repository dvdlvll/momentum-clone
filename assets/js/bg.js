function randomBackground() {
  let background = document.querySelector(".bg");
  let images = ["img-1", "img-2", "img-3", "img-4", "img-5"];

  let randomNumber = Math.floor(Math.random() * images.length);
  let classToAdd = images[randomNumber];

  background.classList.add(classToAdd);
}
/* call function */
randomBackground();
