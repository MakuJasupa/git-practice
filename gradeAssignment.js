//Grades Assignment

// Check if the grade is an Excellent, Good, Fair, or Needs Improvement
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Asks the user for their score
rl.question('Enter your score: ', (answer) => {
  let score = parseInt(answer);

  if (score >= 90) {
    console.log("Your grade is: Excellent.");
  } else if (score >= 80 && score <= 89) {
    console.log("Your grade is: Good.");
  } else if (score >= 70 && score <= 79) {
    console.log("Your grade is: Fair.");
  } else if (score >= 0 && score <= 69) {
    console.log("Your grade needs improvement.");
  } else {
    console.log("Invalid score. (Tip: Use numbers only.)");
  }

  // Close the readline interface
  rl.close();
});