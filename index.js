// DEPENDENCIES
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./src/readme-template');


const promptUser = () => {
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
            choices: ['none', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'jQuApache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
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
            name: 'confirmTableOfContents',
            message: 'Would you like to add a table of contents?',
            default: true
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

promptUser()
    .then(readmeData => {
        const documentREADME = generateREADME(readmeData);

        fs.writeFile('./dist/README.md', documentREADME, err => {
          if (err) throw new Error(err);

          console.log('README document created! Check out README.md in the ./dist folder to see it!');
        });
    });
