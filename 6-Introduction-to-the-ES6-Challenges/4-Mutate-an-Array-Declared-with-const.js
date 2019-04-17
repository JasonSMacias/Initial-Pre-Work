// In this lesson I learned that objects, including arrays and functions, declared with const are still mutable, though their variable identifier cannot be reassigned.  I also learned how to mutate a variable delcared with const

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;


  // change code above this line
}
editInPlace(); 
