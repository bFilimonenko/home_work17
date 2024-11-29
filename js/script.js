const acc = document.querySelectorAll(".accordion-button");
let i;
console.log(acc);

let special = document.querySelector(".current");
special.style.display = "block";

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const description = this.nextElementSibling;
    if (description.style.display === "block") {
      description.style.display = "none";
    } else {
      description.style.display = "block";
    }
  });
}



//
const slider = document.querySelector('.testimonials-block-list');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const cards = document.querySelectorAll('.testimonials-block-card');
//
let currentSlide = -1;
slider.style.transform = `translateX(80%)`;
//
next.addEventListener('click', function () {
  // Move to the next slide
  currentSlide = (currentSlide + 1) % cards.length;
  updateSlider();
});
//
prev.addEventListener('click', function () {
  // Move to the previous slide
  currentSlide = (currentSlide - 1 + cards.length) % cards.length;
  updateSlider();
});
//
function updateSlider() {
  // Adjust the translateX property to show the current slide
  slider.style.transform = `translateX(-${currentSlide * 80}%)`;
}
//
// const slider = document.querySelector('.testimonials-slider');
// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');
// const cards = document.querySelectorAll('.testimonials-block-card');
//
// // Define gap percentage
// const gapPercentage = 10; // Matches the gap in the CSS
// let currentSlide = 0;
//
// next.addEventListener('click', function () {
//   // Move to the next slide
//   currentSlide = (currentSlide + 1) % cards.length;
//   updateSlider();
// });
//
// prev.addEventListener('click', function () {
//   // Move to the previous slide
//   currentSlide = (currentSlide - 1 + cards.length) % cards.length;
//   updateSlider();
// });
//
// function updateSlider() {
//   // Adjust the translateX property considering the gap
//   slider.style.transform = `translateX(-${(currentSlide * (80 + gapPercentage))}%)`;
// }
//
