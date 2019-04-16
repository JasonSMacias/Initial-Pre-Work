// In this lesson i learned how to use the logical OR operator || in comparisons to test more than one condition at a time and check if either condition is the case.

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
