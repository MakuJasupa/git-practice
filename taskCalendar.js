// Task Calendar

// Ask the user for the day of the week
const day = prompt("Enter a day of the week: ");

// Switch statement to check the day of the week
switch (day) {
  case 'monday':
    alert("Today is Monday. Finish your assignments");
    break;
  case 'tuesday':
    alert("Today is Tuesday. Go to school the whole day and workout in the afternoon.");
    break;
  case 'wednesday':
    alert("Today is Wednesday. Free day! Play games.");
    break;
  case 'thursday':
    alert("Today is Thursday. Finish your assignments and workout in the afternoon.");
    break;
  case 'friday':
    alert("Today is Friday. Go to school in the morning and play games at night");
    break;
  case 'saturday':
    alert("Today is Saturday. Go to sleep the whole day.");
    break;
  case 'sunday':
    alert("Today is Sunday. Play outside and watch a movie with family.");
    break;
  default:
    alert("Invalid day. (Tip: Use letters only.)");
    break;
}

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch