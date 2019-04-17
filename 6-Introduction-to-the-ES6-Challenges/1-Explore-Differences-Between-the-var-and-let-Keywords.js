// In this lesson i learned about using let to declare variables, and how it improves upon var by throwing an error if the same variable is declared more than once

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
