// require the inquirer library
const inquirer = require('inquirer');
// require the local file 
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    /* Pass your questions in here */
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
      type: 'input',
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
      type: 'input',
      name: 'license',
      message: 'Which type of License does your application come with?',
      default: 'MIT'
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
      default: 'your github issues section.'
    }

    //need to look at how a user can add screenshots to this app.
    
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  //   const {project_title, description, table_of_contents, installation, usage, license, Contributing, tests, questions} = answers;
    
  //     const html = 
  // `# ${project_title}
  
  // ## Description:
  // ${description}
  
  // ##Table Of Contents:
  
  // ${table_of_contents}

  // ## Installation:

  // ${installation}

  // `;

  // const createFile = fs.writeFile(path.join(__dirname, './', 'readme.md'), html);

    
    generateMarkdown(answers);

  })

  // .catch((error) => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });