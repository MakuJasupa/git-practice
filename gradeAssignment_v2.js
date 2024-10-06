// Grade Assignment

// Ask the user for their score
let score = parseInt(prompt("Enter your score: "));

// Check the equivalent grade of the score
let grade = (score >= 97) ? "1.00" : (score >= 94) ? "1.25" : (score >= 91) ? "1.50" : (score >= 88) ? "1.75" : (score >= 85) ? "2.00" : (score >= 82) ? "2.25" : (score >= 79) ? "2.50" : (score >= 76) ? "2.75" : (score >= 75) ? "3.00" : (score >= 72) ? "4.00" : "5.00";

// Check if the score is an Excellent, Above Average, Average, Below Average or Poor
let grade2 = (score >= 97) ? "Average" : (score >= 94) ? "Excellent" : (score >= 91) ? "Above Average" : (score >= 88) ? "Above Average" : (score >= 85) ? "Average" : (score >= 82) ? "Average" : (score >= 79) ? "Below Average" : (score >= 76) ? "Below Average" : (score >= 75) ? "Below Average" : (score >= 72) ? "Poor" : "Poor";

// Display the grades
console.log(`Your equivalent Grade is: "${grade}" ${grade2}`);

// Check if the score is a High Pass, Average Pass, Low Pass, or Failed
let remarks = score 

if (remarks >= 90) {
    console.log("Final remarks: HIGH PASS, Candidate for Cum Laude");
} else if (score >= 80) {
    console.log("Final remarks: AVERAGE PASS");
} else if (score >= 75) {
    console.log("Final remarks: LOW PASS");
} else {
    console.log("Final remarks: FAILED, Needs Improvement");
}

// Display the remarks
//console.log(`Final remarks: ${remarks}`);