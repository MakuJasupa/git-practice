//Age Checker

// Check if the user is a child, teenager, or an adult
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Asks the user for their age
rl.question('Enter your age: ', (answer) => {
  let age = parseInt(answer);

  if (age < 13) {
    console.log("You are a child.");
  } else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
  } else if (age >= 20) {
    console.log("You are an adult.");
  } else {
    console.log("Invalid age. (Tip: Use numbers only.)");
  }

  // Close the readline interface
  rl.close();
});

// Reference: https://nodejs.org/api/readline.html