// In this lesson I learned how the scopes of var and let differ, with var either being scoped globally or within a function, and let being scoped within any block, statement, or expression

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
