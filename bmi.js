// Calls the packages needed
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// Obtain the user input i.e any values when function is called 
app.use(bodyParser.urlencoded({extended: true}));

// Gets the info from the server
app.get("/", function(req, res) {
    // __dirname will get the location of the current file
    res.sendFile(__dirname + "/index.html");
});

// Send the info to the server
app.post("/", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var result = weight / (height * height);

    res.send("Your current BMI is " + result);
});

// function to show the hosting port
app.listen(3000, function() {
    console.log("Server is running on port 3000");
});