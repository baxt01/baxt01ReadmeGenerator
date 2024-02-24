// require the file system library
const fs = require("fs").promises;
// require the path library
const path = require('path');

// function to generate markdown for README
function generateMarkdown(answers) {
  
  // deconstructing the answers object.
  const {project_title, description, table_of_contents, installation, usage, license, Contributing, tests, questions} = answers;
let licenseImg = 'to be replaced with an image link!';
let licenseInfo = 'sample text for testing!';
switch (license) {
  case 'Apache':
    licenseImg = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    licenseInfo = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
    break;
  case 'Boost':
    licenseImg = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    licenseInfo = 'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
    break;
    case 'BSD2':
      licenseImg = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
      case 'BSD3':
        licenseImg = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        break;
      case 'cc0':
        licenseImg = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
        break;
        case 'Eclipse':
          licenseImg = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
          break;
          case 'GNU':
            licenseImg = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            licenseInfo = 'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.';
            break;
          case 'GNU GPL v2':
            licenseImg = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
            licenseInfo = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
            break;
            case 'AGPL v3':
              licenseImg = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
              licenseInfo = 'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.';
              break;
              case 'GNU LGPL v3':
                licenseImg = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
                break;
                case 'FDL 1.3':
                  licenseImg = '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)';
                  break;
                  case 'The Hippocratic 3.0':
                    licenseImg = '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)';
                    break;
                    case 'IBM':
                      licenseImg = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
                      break;
                      case 'ICS':
                        licenseImg = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
                        break;
                        case 'MIT':
                          licenseImg = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
                          licenseInfo = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
                          break;
                          case 'Mozilla':
                            licenseImg = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
                            licenseInfo = 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.';
                            break;
                            case 'Open Data Commons':
                              licenseImg = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
                              break;
                              case 'Open Database License (ODbL)':
                                licenseImg = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';
                                break;
                                case 'Perl':
                                  licenseImg = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
                                  break;
                                  case 'SIL':
                                    licenseImg = '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
                                    break;
                                    case 'Unlicense':
                                      licenseImg = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
                                      licenseInfo = 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.';
                                      break;
                                      case 'WTFPL':
                                        licenseImg = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
                                        break;
                                        case 'Zlib':
                                          licenseImg = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
                                          break;
      }

  let html = `${licenseImg}\n\n# ${project_title}\n\n## Description:\n${description}\n\n`;

  // checking IF the user has chosen to have a table_of_contents or not.
  if (!table_of_contents.length) {
    console.log('table of contents is empty!');
    
  // Adding the remaining sections.
  html += `## Installation:\n\n${installation}\n\n## License\n\n${license}\n${licenseInfo}\n\n## Usage:\n\n${usage}\n\n## Contributing:\n\n${Contributing}\n\n## Tests:\n\n${tests}\n\n## Questions:\n\n${questions}`;

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
  html += `## Installation:\n\n${installation}\n\n## License\n\n${license}\n${licenseInfo}\n\n## Usage:\n\n${usage}\n\n## Contributing:\n\n${Contributing}\n\n## Tests:\n\n${tests}\n\n## Questions:\n\n${questions}`;

  // Writing content to file
  const createFile = fs.writeFile(path.join(__dirname, './', 'readme.md'), html);

  return `# ${answers.project_title}\n\n`;
}

module.exports = generateMarkdown