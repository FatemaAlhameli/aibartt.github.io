// An array of image filenames
const images = ['Images/1.jpeg', 'Images/2.jpeg', 'Images/3.jpeg', 'Images/4.jpeg', 'Images/5.jpeg'];

// Select the elements we need to manipulate
const currentImage = document.querySelector('#currentImage');
const previousButton = document.querySelector('#previousButton');
const nextButton = document.querySelector('#nextButton');

// Keep track of the current image index
let currentIndex = 0;

// Set the initial image
currentImage.src = images[currentIndex];

// Add a click event listener to the previous button
previousButton.addEventListener('click', function() {
  // Decrement the current index
  currentIndex = currentIndex - 1;

  // If we've gone below the first image, wrap around to the last image
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  // Update the current image
  currentImage.src = images[currentIndex];
});

// Add a click event listener to the next button
nextButton.addEventListener('click', function() {
  // Increment the current index
  currentIndex = currentIndex + 1;

  // If we've gone past the last image, wrap around to the first image
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Update the current image
  currentImage.src = images[currentIndex];
});
