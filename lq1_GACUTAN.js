//Data Storage

//Variables

//Persona 1
let firstPersonaFirstName = "Maria";
let firstPersonaMiddleName = "Delos Santos";
let firstPersonaLastName = "Las Marias";
let firstPersonaFullName = (firstPersonaFirstName + firstPersonaMiddleName + firstPersonaLastName);
let rearrangedName = firstPersonaFullName.split(" ");
let firstPersonaAge = 25;
let firstPersonaAddress = "Upper Session Road, Baguio City, Benguet";
let formattedName = "Name: " +rearrangedName[2] + ", " + rearrangedName[0] + " " + rearrangedName[1] + ", Age: " + firstPersonaAge + ", Address: " + firstPersonaAddress;

console.log(formattedName);

//Persona 2
let secondPersonaFirstName = "Juan";
let secondPersonaMiddleName = "Gamoso";
let secondPersonaLastName = "Dela Cruz";
let secondPersonaFullName = (secondPersonaFirstName + secondPersonaMiddleName + secondPersonaLastName);
let rearrangedName2 = secondPersonaFullName.split("");
let secondPersonaAge = 28;
let secondPersonaAddress = "San Nicolas, Candon City, Ilocos Sur";
let formattedName2 = "Name: " +rearrangedName2[2] + ", " + rearrangedName2[0] + " " + rearrangedName2[1] + ", Age: " + secondPersonaAge + ", Address: " + secondPersonaAddress;

console.log(formattedName2);