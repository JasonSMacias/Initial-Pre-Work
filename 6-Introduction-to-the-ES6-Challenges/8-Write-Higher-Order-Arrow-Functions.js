// In this lesson I learned how to use .filter() and .map() with arrow functions to write those higher-order function in a more concise way

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((number) => number > 0 && Number.isInteger(number)).map((int) => int * int);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
