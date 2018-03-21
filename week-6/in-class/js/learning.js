// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

let my_name = "Nora";
let your_name = "Ryan";

if (your_name === "Nora") {
  renderOutput("That's me!");
} else if (your_name === "Ryan") {
  renderOutput("That's Ryan!");
} else {
  renderOutput("I must be someone else");
}


function helloWorld(name) {
  renderOutput("Hello" + name);
}

helloWorld();
helloWorld();
helloWorld();

function helloName(name) {
  renderOutput("Hello " + name);
}
helloName("Nora");
helloName("George");
helloName("Martha");

function todaysHours(days_hours) {
  renderOutput(days_hours);
}

hours.forEach(todaysHours);