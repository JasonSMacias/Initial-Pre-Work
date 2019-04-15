// In this lesson I learned how to use variables to fill in blanks in a string in a madlibs type exercise

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "I was walking down the street when a big " + myNoun + " showed up and made me feel " + myAdjective + ", so right then I " + myVerb + " " + myAdverb + " for several minutes.";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
