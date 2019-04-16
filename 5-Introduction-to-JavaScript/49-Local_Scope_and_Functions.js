// In this lesson I learned how to scope a variable within a function and check to see if it is visible outside of the function

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 11;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
