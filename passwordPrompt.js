// Password Prompt

let correctPassword = "uwu";
let password;

// Loop until the user enters the correct password
do {
  password = prompt("Enter your password: ");
  if (password !== correctPassword) {
    console.log("Incorrect. Try again.");
  }
} while (password !== correctPassword);

console.log("Access granted!");

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while