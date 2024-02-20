// require the file system library
const fs = require("fs").promises;
// require the path library
const path = require('path');

// function to generate markdown for README
function generateMarkdown(answers) {
  
  // deconstructing the answers object.
  const {project_title, description, table_of_contents, installation, usage, license, Contributing, tests, questions} = answers;

  let html = `# ${project_title}\n\n## Description:\n${description}\n\n`;

  // checking IF the user has chosen to have a table_of_contents or not.
  if (!table_of_contents.length) {
    console.log('table of contents is empty!');
    
  // Adding the remaining sections.
  html += `## Installation:\n\n${installation}\n\n## License\n\n${license}\n\n## Usage:\n\n${usage}\n\n## Contributing:\n\n${Contributing}\n\n## Tests:\n\n${tests}\n\n## Questions:\n\n${questions}`;

  // Writing content to file
  const createFile = fs.writeFile(path.join(__dirname, './', 'readme.md'), html);

  return `# ${answers.project_title}\n\n`;
  } else {
    let tableOfContents = "## Table Of Contents:\n\n";
    table_of_contents.forEach(element => {
      tableOfContents += `* [${element}](#${element})\n`;
    });
    html += tableOfContents + "\n";
  }

  // Adding the remaining sections.
  html += `## Installation:\n\n${installation}\n\n## License\n\n${license}\n\n## Usage:\n\n${usage}\n\n## Contributing:\n\n${Contributing}\n\n## Tests:\n\n${tests}\n\n## Questions:\n\n${questions}`;

  // Writing content to file
  const createFile = fs.writeFile(path.join(__dirname, './', 'readme.md'), html);

  return `# ${answers.project_title}\n\n`;
}

module.exports = generateMarkdown