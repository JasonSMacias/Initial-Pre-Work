// In this lesson I learned how to check if a property of a given object exists or not using the .hasOwnProperty() method

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }
  return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");
