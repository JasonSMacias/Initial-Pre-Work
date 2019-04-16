// In this lesson I learned about a queue data structure and how to use it in a function

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  let newItem = arr.shift();

  return newItem;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
