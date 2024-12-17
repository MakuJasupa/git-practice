// Iteration Mapping

// Ask for user input for the limit of the double loop
let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "));

// Variables for double loop 
let firstCounter = 0;
let secondCounter = 0;
let addedValue = 0;

// Double loop
while (secondCounter < maxLimit) {
  firstCounter = 0;
  while (firstCounter < maxLimit) {
    addedValue = secondCounter + firstCounter;
    console.log(`[${secondCounter}] [${firstCounter}] Added value is ${addedValue}`); // Display the loop points and added value
    firstCounter++;
  }
  secondCounter++;
}