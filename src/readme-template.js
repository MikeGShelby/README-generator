// LICENSE BADGES
gnuAgplV3Badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
gnuGplV3Badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
gnuLgplV3Badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
mozillaLicenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
apacheBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
mitBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
BoostBadge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
unlicenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';


// FUNCTION: create the table of contents
const generateTOCheader = (confirmTableOfContents) => {
    if (!confirmTableOfContents) {
      return '';
    }
return `## Table of Contents`
}

const generateTOCitems = (installation, usage, license, contributing, tests, confirmQuestions) => {


// declare empty array for table of content items
let itemArr = []

// If section contains content, then add that section title to an array
installation ? itemArr.push("* [Installation](#installation)"): null;
usage ? itemArr.push("* [Usage](#usage)"): null;
license ? itemArr.push("* [License](#license)"): null;
contributing ? itemArr.push("* [Contributing](#contributing)"): null;
tests ? itemArr.push("* [Tests](#tests)"): null;
confirmQuestions ? itemArr.push("* [Questions](#questions)"): null;

return itemArr.join('\n');

}


// FUNCTION: create the questions section
const generateQuestionsSection = (confirmQuestions, githubUser, email, contactInstructions) => {
    if (!confirmQuestions) {
      return '';
    }

return `
## Questions

### Github Username: ${githubUser}
### Github Profile: https://github.com/${githubUser}

### Email: ${email}
### Instructions on how to reach me: ${contactInstructions}
`;
  };

// FUNCTION: create the installation section
const generateInstallationSection = (installation) => {
    if (!installation) {
      return '';
    }

return `
## Installation
${installation}
`;
  };

// FUNCTION: create the usage section
const generateUsageSection = (usage) => {
    if (!usage) {
      return '';
    }

return `
## Usage
${usage}
`;

};

// FUNCTION: create the license section/title
const generateLicenseSection = (license) => {

if (!license || license == 'none') {
return '';
}

return `
## License
${license}`;
};

// FUNCTION: create the license badge. Evaluate for which license has been selected and display corresponding license badge with URL link to additional license info.
const generateLicenseBadge = (license) => {

switch (license) {

case 'none':
case !license:
return '';

case 'GNU AGPLv3':
return `
${gnuAgplV3Badge}
`;

case 'GNU GPLv3':
return `
${gnuGplV3Badge}
`;

case 'GNU LGPLv3':
return `
${gnuLgplV3Badge}
`;

case 'Mozilla Public License 2.0':
return `
${mozillaLicenseBadge}
`;

case 'jQuApache License 2.0':
return `
${apacheBadge}
`;

case 'MIT License':
return `
${mitBadge}
`;

case 'Boost Software License 1.0':
return `
${BoostBadge}
`;

case 'The Unlicense':
return `
${unlicenseBadge}
`;

}
};

// FUNCTION: create the contributing section
const generateContributingSection = (contributing) => {
    if (!contributing) {
      return '';
    }

return `
## Contributing
${contributing}
`;
};

// FUNCTION: create the tests section
const generateTestsSection = (tests) => {
    if (!tests) {
      return '';
    }

return `
## Tests
${tests}
`;
};


// FUNCTION: will take data input from user and add it to a README template
module.exports = templateData => {
    console.log(templateData);

    // destructure inputs from templateData based on their property key names
    const { title, description, confirmTableOfContents, installation, usage, license, contributing, tests, confirmQuestions, githubUser, email, contactInstructions} = templateData;

    // const { title, description, installation, usage, license, contributing, tests, confirmQuestions, githubUser, email, contactInstructions} = templateData;

    return `

# ${title}${generateLicenseBadge(license)}
## Description
${description}

${generateTOCheader(confirmTableOfContents)}
${generateTOCitems(installation, usage, license, contributing, tests, confirmQuestions)}
${generateInstallationSection(installation)}${generateUsageSection(usage)}${generateLicenseSection(license)}${generateLicenseBadge(license)}${generateContributingSection(contributing)}${generateTestsSection(tests)}${generateQuestionsSection(confirmQuestions, githubUser, email, contactInstructions)}
`;
};



