// In this lesson i learned how to use the logical and operator && in comparisons to test more than one condition at a time and check if all are the case

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {

    return "Yes";

  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
