// require the file system library
const fs = require("fs").promises;
// require the path library
const path = require('path');

// function to generate markdown for README
function generateMarkdown(answers) {
  
  const {project_title, description, table_of_contents, installation, usage, license, Contributing, tests, questions} = answers;

  if (!table_of_contents.length) {
  console.log('table of contents is empty!');
} else {
  console.log(table_of_contents);
}
  const html = 
  `# ${project_title}
  
  ## Description:
  ${description}
  
  ##Table Of Contents:
  
  ${table_of_contents}

  ## Installation:

  ${installation}

  `;

  const createFile = fs.writeFile(path.join(__dirname, './', 'readme.md'), html);


  
  return `# ${answers.project_title}

`;
}

module.exports = generateMarkdown;
