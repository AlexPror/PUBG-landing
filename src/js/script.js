const sliderLine = document.querySelectorAll(".slider__item");
const prevButton = document.querySelector(".slider__btn-prev");
const nextButton = document.querySelector(".slider__btn-next");

let sliderIndex = 0;
const sliderCount = sliderLine.length;

function showNextSlide() {
  sliderIndex = (sliderIndex + 1) % sliderCount;
  updateSlider();
}

function showPrevSlide() {
  sliderIndex = (sliderIndex - 1 + sliderCount) % sliderCount;
  updateSlider();
}

prevButton.addEventListener("click", () => {
  showPrevSlide();
});

nextButton.addEventListener("click", () => {
  showNextSlide();
});

function updateSlider() {
  sliderLine.forEach((slide, index) => {
    if (index === sliderIndex) {
      slide.classList.add("slider__item--active");
    } else {
      slide.classList.remove("slider__item--active");
    }
  });
}

// updateSlider();
