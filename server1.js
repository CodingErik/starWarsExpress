// Dependencies
// ===========================================================
const express = require("express");

const app = express();

// 3306 don't do below 3000 this one,  8080 8085 3000
const PORT = process.env.PORT || 3000;

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE
var obiWanKenobi = {
  name: "Obi Wan Kenobi",
  role: "jedi",
  age: 200,
  forcePoints: 1200
};
//

// Routes
// ===========================================================
app.get("/", (req, res) => {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", (req, res) => {
  res.json(yoda);
});

app.get("/darthmaul", (req, res) => {
  res.json(darthmaul);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//
app.get('/Obi_Wan_Kenobi', (req, res) => {
  res.json(obiWanKenobi);
});
// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
