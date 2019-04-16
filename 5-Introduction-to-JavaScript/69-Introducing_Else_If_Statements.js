// In this lesson i learned how to use else if statements to chain if statements together

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
    return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);
