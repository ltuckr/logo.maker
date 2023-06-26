// Packages
const inquirer = require("inquirer");
const fs = require("fs");

//shape library
const {Square, Circle, Triangle } = require("./lib/shapes");

// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
    let svgString = "";
    // Logo size
    svgString =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // text placed inside shape
    svgString += "<g>";
    // Input shape selection into SVG
    svgString += `${answers.shape}`;

