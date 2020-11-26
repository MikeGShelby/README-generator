
// DEPENDENCIES
const fs = require('fs');
const generatePage = require('./src/readme-template');

const profileDataArgs = process.argv.slice(2);
const [title, github] = profileDataArgs;

// const printProfileData = profileDataArr => {
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// }

// printProfileData(profileDataArgs);


  fs.writeFile('./dist/README.md', generatePage(title, github), err => {
    if (err) throw err;

    console.log('README complete! Check out README.md to see the output!');
  });