const sliderImages = document.querySelectorAll(".slide");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
let currentImg = 0;
const time = 3000;

function clearImages() {
  sliderImages.forEach(img => { img.style.display = "none" })
}

function startSlide() {
  clearImages();
  sliderImages[0].style.display = "block";
}

function slideLeft() {
  clearImages();
  if (currentImg === 0) {
    currentImg = sliderImages.length;
  }
  sliderImages[currentImg - 1].style.display = "block";
  currentImg--;
}

function slideRight() {
  clearImages();
  if (currentImg === sliderImages.length - 1) {
    currentImg = -1;
  }
  sliderImages[currentImg + 1].style.display = "block";
  currentImg++;
}

function playImages(){
 slideRight();
setTimeout("playImages()", time);
}

// Left arrow click
arrowLeft.addEventListener("click", slideLeft);

// Right arrow click
arrowRight.addEventListener("click", slideRight);

startSlide();
