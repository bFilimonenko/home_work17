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




document.addEventListener("DOMContentLoaded", () => {
  const testimonialsList = document.querySelector(".testimonials-block-list");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const cards = document.querySelectorAll(".testimonials-block-card");
  const radioButtons = document.querySelectorAll(".radio-buttons input");

  const startOffset = 110; // Initial offset for the first element
  const stepOffset = 57;// Offset step for each card

  let currentIndex = 0; // Start with the first card

  // Update slider position
  const updateSlider = () => {
    testimonialsList.style.transform = `translateX(${startOffset - currentIndex * stepOffset}%)`;
    testimonialsList.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
    updateRadioButtons();
  };

  // Update radio buttons to reflect the active card
  const updateRadioButtons = () => {
    radioButtons.forEach((radio, index) => {
      radio.checked = index === currentIndex;
    });
  };

  // Next button functionality
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length; // Loop back to start
    updateSlider();
  });

  // Previous button functionality
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Loop back to end
    updateSlider();
  });

  // Radio button functionality
  radioButtons.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      currentIndex = index; // Update the index to match the selected radio
      updateSlider();
    });
  });

  // Initialize the slider
  updateSlider();
});


