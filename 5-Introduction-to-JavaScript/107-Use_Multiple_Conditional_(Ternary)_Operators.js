// In this lesson I learned how to chain together ternary operators to check for multiple conditions

function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero"
}

checkSign(10);
