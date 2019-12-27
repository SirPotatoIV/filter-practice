const http = require("http");
const { filterTrash, filterDolls, filterCars } = require("./filters");

const { getStuff, TYPES } = require("./getStuff");

// We got all this stuff for the holidays
const stuff = getStuff();

//filter it out
// THESE FUNCTIONS NEED TO BE EDITIED
// IN THEIR FILE
const dolls = filterDolls(stuff);
const cars = filterCars(stuff);
const trash = filterTrash(stuff);

// DO NOT NEED TO CHANGE THIS
// BUT IT IS GOOD TO LEARN / UNDERSTAND IT
let message = "Opps we messed up.";
let failed = false;
if (dolls.some(({ type }) => type !== TYPES.DOLL)) {
  message += " We did not sort the dolls right.";
  failed = true;
}
if (cars.some(({ type }) => type !== TYPES.CAR)) {
  message += " We did not sort the cars right.";
  failed = true;
}
if (
  trash.every(
    ({ type }, i) => type === TYPES.BOX && type === TYPES.WRAPPING_PAPER
  )
) {
  message += " We threw away a toy :(";
  failed = true;
}

if (!failed) {
  message = "<h1>YAY! WE DID IT!</h1>";
}
//create a server object:
http
  .createServer(function(req, res) {
    res.write(message); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
