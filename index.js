// Handle Button Clicks
function changeBackgroundColor() {
  const colors = [
    "rgb(147, 87, 87)",
    "rgb(61, 149, 61)",
    "rgb(31, 31, 148)",
    "rgb(170, 170, 58)",
    "rgb(77, 117, 130)"
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;
}


// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

// function displayKeyPress(event) {
//   const keyDisplay = document.getElementById("keyPressDisplay");

// }


// Process Text Input
function displayKeyPress(event) {
  const keyDisplay = document.getElementById("keyPressDisplay");

}
// Function to display user input in real-time
function displayUserInput(event) {
  // Implement the function to display user input
  const textInput = document.getElementById("textInput");
  const userDisplay = document.getElementById("textInputDisplay");

  userDisplay.textContent = `You typed: ${textInput.value}`;
}

// Attach Event Listeners 
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked

document
    .getElementById("changeColorButton")
    .addEventListener("click", changeBackgroundColor);


  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById("resetColorButton")
    .addEventListener("dblclick", resetBackgroundColor);

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener("keydown", displayKeyPress);

  // Attach event listener to display user input in real-time as they type
  document
    .getElementById("textInput")
    .addEventListener("input", displayUserInput);
}


// Initialize event listeners when the DOM is loaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};