const sliderImages = document.querySelectorAll(".slide");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const carouselControls = document.querySelector('#carousel-controls')
let currentImg = 0;
const time = 2500;

let timer;

function clearImages() {
  sliderImages.forEach(img => { img.style.display = "none" })
}

function startSlide() {
  clearImages();
  hideControls();
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
  timer = setTimeout("playImages()", time);
}
function pauseImages(){
  clearTimeout(timer);
}

function showControls() {
    play.style.display = 'block';
    pause.style.display = 'block';
}

function hideControls() {
    play.style.display = 'none';
    pause.style.display = 'none';
}

play.addEventListener("click", playImages);

pause.addEventListener("click", pauseImages);

carouselControls.addEventListener('mouseenter', showControls);
carouselControls.addEventListener('mouseleave', hideControls);

// Left arrow click
arrowLeft.addEventListener("click", slideLeft);

// Right arrow click
arrowRight.addEventListener("click", slideRight);



startSlide();
