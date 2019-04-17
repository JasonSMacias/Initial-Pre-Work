// In this lesson I learned how to use an object to look up data instead of a switch statement

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

    var lookup = {
    "alpha":  "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }

  result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
