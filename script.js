// Generate an array with numbers 1-11, each appearing exactly 3 times
let diceNumbers = [];
function generateDiceNumbers() {
  diceNumbers = [];
  for (let i = 1; i <= 11; i++) {
    diceNumbers.push(i, i, i); // Each number appears 3 times
  }

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = diceNumbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [diceNumbers[i], diceNumbers[j]] = [diceNumbers[j], diceNumbers[i]];
  }
}

// Function to roll the dice with animation
function newBlock() {
  let windowDiv = document.getElementById("window");

  if (diceNumbers.length === 0) {
    generateDiceNumbers(); // Refill the numbers if all are used
  }

  let randomNumber = diceNumbers.pop(); // Take the last number from the shuffled list

  // Create new image element
  let newBlockImg = document.createElement("img");
  newBlockImg.src = `blocks/${randomNumber}.png`; // Adjust path if needed
  newBlockImg.alt = `Dice ${randomNumber}`;
  newBlockImg.className = "diceImage rolling"; // Add rolling animation class

  // Clear previous block AFTER animation
  windowDiv.innerHTML = "";
  windowDiv.appendChild(newBlockImg);

  // Remove rolling effect after animation
  setTimeout(() => {
    newBlockImg.classList.remove("rolling");
    newBlockImg.classList.add("fade-in");
  }, 500); // Matches CSS animation time
}

// Initialize dice numbers on page load
generateDiceNumbers();
