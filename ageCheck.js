//Age Checker

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your age: ', (answer) => {
  let age = parseInt(answer);

  if (age < 13) {
    console.log("You are a child.");
  } else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
  } else if (age >= 20) {
    console.log("You are an adult.");
  } else {
    console.log("Invalid age.");
  }

  rl.close();
});