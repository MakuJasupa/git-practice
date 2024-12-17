let name =  prompt("Register your Username: ");
let passcode = prompt("Register your passcode: ");
let rePasscode = prompt("Re-enter your passcode: ");
 
if(passcode == rePasscode) {
    console.log("Your account has been registered succesfully");
} else {
    console.log("Incorrect passcode")
}

let username = prompt("Username: ");
let password = prompt("Password: ");
    
if(passcode == password && name == username) {
    console.log("Welcome to DSA, " + username);
} else if(password != passcode) {
    console.log("Incorrect Password, Re-run the code!");
} else if(username != name) {
    console.log ("Incorrect Username, Re-run the code!");
} else {
	console.log("Password does not Match, Re-run the code!");
}
	