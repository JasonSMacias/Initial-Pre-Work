// In this lesson I learned more about local and globally scoped variables, and how to set the same variable name to have different values locally and globally.

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
