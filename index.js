// require the file system library
const fs = require("fs");
// require the path library
const path = require('path');
// require the inquirer library
import inquirer from 'inquirer';
// require the local file 
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'input_type',
        message: 'What is your name?',
        default: 'Michael'
    },
    {
        type: 'list',
        name: 'list question',
        message: 'What programming language do you like?',
        choices:['Javascript', 'C++', 'python', 'ruby'],
        default: 'Javascript'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })


//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });