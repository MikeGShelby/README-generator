// DEPENDENCIES
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/readme-template');

// const documentREADME = generatePage(title, github);

// fs.writeFile('./dist/README.md', generatePage(title, github), err => {
//     if (err) throw err;

//     console.log('README complete! Check out README.md to see the output!');
// });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name??'
        }

    ])
    .then(answers => console.log(answers));