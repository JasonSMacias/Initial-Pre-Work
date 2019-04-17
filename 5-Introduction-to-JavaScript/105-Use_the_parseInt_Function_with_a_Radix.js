// In this lesson i learned how to specify the radix of a number to be parsed with parseInt(), so it will be converted into a base 10 integer

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
