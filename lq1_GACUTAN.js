//Data Storage

//Variables

//Persona 1
let firstPersonaFirstName = "Maria";
let firstPersonaMiddleName = "Delos Santos";
let firstPersonaLastName = "Las Marias";
let firstPersonaFullName = (firstPersonaLastName, firstPersonaFirstName, firstPersonaMiddleName);
let rearrangedName = firstPersonaFullName.split("  ").reverse().join(", ");
//let persona1Name = "Maria Delos Santos Las Marias";
//let rearrangedName1 = persona1Name.split(" ").reverse().join(", ");
let firstPersonaAge = 25;
let firstPersonaAddress = "Upper Session Road, Baguio City, Benguet";
let formattedName = "Name: " +rearrangedName[0] + ", " + rearrangedName[1] + " " + rearrangedName[2] + ", Age: " + firstPersonaAge + ", Address: " + firstPersonaAddress;

//console.log(rearrangedName1);
console.log(formattedName);

//Persona 2
let secondPersonaFirstName = "Juan";
let secondPersonaMiddleName = "Gamoso";
let secondPersonaLastName = "Dela Cruz";
let secondPersonaFullName = (secondPersonaLastName + secondPersonaFirstName + secondPersonaMiddleName);
let rearrangedName2 = secondPersonaFullName.split("   ");
let secondPersonaAge = 28;
let secondPersonaAddress = "San Nicolas, Candon City, Ilocos Sur";
let formattedName2 = "Name: " +rearrangedName2[0] + ", " + rearrangedName2[1] + " " + rearrangedName2[2] + ", Age: " + secondPersonaAge + ", Address: " + secondPersonaAddress;

console.log(formattedName2);
//let firstPersonaNameLength = rearrangedName.join(" ").length;
//let secondPersonaNameLength = rearrangedName2.join("").length;
//console.log(firstPersonaNameLength);
//console.log(secondPersonaNameLength);