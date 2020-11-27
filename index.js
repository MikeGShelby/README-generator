// DEPENDENCIES
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/readme-template');

// LICENSE BADGES
apacheBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
BoostBadge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
bsd2Badge = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
bsd3Badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
mitBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
unlicenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
gnuAgplV3Badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
gnuGplV3Badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
gnuLgplV3Badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
mozillaLicenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';



// const documentREADME = generatePage(title, github);

// fs.writeFile('./dist/README.md', generatePage(title, github), err => {
//     if (err) throw err;

//     console.log('README complete! Check out README.md to see the output!');
// });



const promptProject = () => {
    console.log(`
    =================
    CREATE A NEW README
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Provide a title for the project (Required)',
            validate: titleInput => {
                if (titleInput) {
                return true;
                } else {
                console.log('Please enter a title for the project!');
                return false;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Provide a description for the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                return true;
                } else {
                console.log('Please enter a description for the project!');
                return false;
                }
            }
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information'
        },

        {
            type: 'list',
            name: 'license',
            message: 'Select a license',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'jQuApache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
        },

        {
            type: 'input',
            name: 'contributing',
            message: 'Provide names for additional contributors'
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Provide test information',
        },

        {
            type: 'confirm',
            name: 'confirmQuestions',
            message: 'Would you like to add a Questions sections that includes contact information?',
            default: true
          },

          {
            type: 'input',
            name: 'githubUser',
            message: 'What is your GitHub user name? (Required)',
            when: ({ confirmQuestions }) => {
              if (confirmQuestions) {
                return true;
              } else {
                return false;
              }
            }
          },

          {
            type: 'input',
            name: 'githubProfile',
            message: 'Provide a link to your GitHub profile (Required)',
            when: ({ confirmQuestions }) => {
              if (confirmQuestions) {
                return true;
              } else {
                return false;
              }
            }
          },

          {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            when: ({ confirmQuestions }) => {
              if (confirmQuestions) {
                return true;
              } else {
                return false;
              }
            }
          },

          {
            type: 'input',
            name: 'contactInstructions',
            message: 'Provide instructions on how you can be reached',
            when: ({ confirmQuestions }) => {
              if (confirmQuestions) {
                return true;
              } else {
                return false;
              }
            }
          },
    ])
}


promptProject()
    .then(readmeData => {
    console.log(readmeData);
});