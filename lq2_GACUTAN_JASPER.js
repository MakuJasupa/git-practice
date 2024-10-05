// Coding Problem

// Ask for user input for name, address, age, class role, and course
let name = prompt("Enter your name: ");
let address = prompt("Enter your address: ");
let age = parseInt(prompt("Enter your age: "));
let classRole = prompt("Enter your class role (Officer, Student, Teacher): ");
let course = prompt("Enter your course (BSCS, BSM, BAEL): ");

// Check the course of the user
switch (course) {
  case "BSCS":
    // Check the class role of the user
    switch (classRole) {
      case "Officer":
        // Print the name of the user depends on 1/4 of their age
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Student":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Teacher":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      default:
        alert("Incorrect class role. (Default: Student)");
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
    }
    break;
  case "BSM":
    switch (classRole) {
      case "Officer":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Student":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Teacher":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      default:
        alert("Incorrect class role. (Default: Student)");
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
    }
    break;
  case "BAEL":
    switch (classRole) {
      case "Officer":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Student":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Teacher":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      default:
        alert("Incorrect class role. (Default: Student)");
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
    }
    break;
  default:
    alert("Incorrect course. (Default: BSCS)");
    switch (classRole) {
      case "Officer":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Student":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      case "Teacher":
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
      default:
        alert("Incorrect class role. (Default: Student)");
        for (let i = 0; i < age / 4; i++) {
          alert(name);
        }
        break;
    }
    break;
}