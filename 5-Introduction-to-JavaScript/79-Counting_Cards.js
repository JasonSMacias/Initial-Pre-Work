// In this lesson I learned how to create a function to accept card name arguments, keep a count to guide betting based on cards selected so far, and instructions to bet or hold depending on what that current count is.

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var bet;
  if (count > 0) {
    bet = "Bet";
  }
  else {
    bet = "Hold";
  }
  return count + " " + bet;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
