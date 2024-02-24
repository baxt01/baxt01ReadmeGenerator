// require the inquirer library
const inquirer = require('inquirer');
// require the local file 
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'username',
      message: 'Enter your github username',
      default: 'baxt01',
    },
    {
        type: 'input',
        name: 'project_title',
        message: 'What is your project title?',
        default: 'repo'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type a description of you\'re project?',
        default: 'This is my project repo...'
    },
    {
      type: 'checkbox',
      name: 'table_of_contents',
      message: 'Which sections do you wish to include in the table of contents?',
      choices: ['installation', 'usage', 'license', 'contributing', 'tests', 'questions'],
      default: 'installation'
    },
    {
      type: 'editor',
      name: 'installation',
      message: 'How can a user install your application?',
      default: 'Clone the repo to you\'re local drive.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What can you\'re application be used for?',
      default: 'working.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which type of License does your application come with?',
      choices: ['Apache', 'Boost', 'BSD2', 'BSD3', 'CC0', 'Eclipse', 'GNU', 'GNU GPLv3', 'GNU AGPL v3', 'GNU FDL v1.3', 'The Hippocratic License 3.0', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Open Database License (ODbL)', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib'],
      default: ''
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Who has and who can Contribute to your project',
      default: 'Open source.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What run time test have been performed on this project?',
      default: 'I.E Github pages etc,',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'where can questions and issues be reported to?',
      default: 'youremail@example.com'
    }

    //need to look at how a user can add screenshots to this app.
    
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    generateMarkdown(answers);
  })

  // .catch((error) => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });