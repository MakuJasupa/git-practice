// Guess a number

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Loop until the user guesses the correct number
while (true) {
  let guess = prompt("Guess a number between 1 and 10: ");

  if (parseInt(guess) < randomNumber) {
    console.log("Too low!");
  } else if (parseInt(guess) > randomNumber) {
    console.log("Too high!");
  } else {
    console.log(`Correct! The number was ${randomNumber}.`);
    break;
  }
}

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while