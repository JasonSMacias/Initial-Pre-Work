// In this lesson I learned how to use getters and setters in a class to control access to an object and make changes to the input or output invisibly

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(far) {
      this._far = far;
    }
    get temp() {
      return (5/9 * (this._far-32));
    }
    set temp(updatedTemp) {
      this._far = updatedTemp;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
