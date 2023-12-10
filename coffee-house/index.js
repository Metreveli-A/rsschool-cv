// JavaScript for automatic sliding (optional)
const slider = document.querySelector('.slider');
let count = 0;

function nextSlide() {
  count = (count + 1) % 3;
  updateSlider();
}

function updateSlider() {
  const transformValue = `translateX(-${count * 100}%)`;
  slider.style.transform = transformValue;
}
// Uncomment the line below to enable automatic sliding
  // setInterval(nextSlide, 3000); // Change the time interval (in milliseconds) as needed


  console.log("I think I have 91 points");