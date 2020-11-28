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


// FUNCTION: create the questions section
const generateQuestionsSection = (confirmQuestions, githubUser, email, contactInstructions) => {
    if (!confirmQuestions) {
      return '';
    }

    return `
    ## QUESTIONS

    ### GITHUB USERNAME: ${githubUser}
    ### GITHUB PROFILE LINK: https://github.com/${githubUser}

    ### EMAIL: ${email}
    ### INSTRUCTIONS ON HOW TO REACH ME: ${contactInstructions}
    `;
  };


// FUNCTION: create the installation section
const generateInstallationSection = (installation) => {
    if (!installation) {
      return '';
    }

    return `
    ## INSTALLATION
    ${installation}
    `;
  };

// FUNCTION: create the usage section
const generateUsageSection = (usage) => {
    if (!usage) {
      return '';
    }

    return `
    ## USAGE
    ${usage}
    `;
  };


  [, , , 'GNU LGPLv3', 'Mozilla Public License 2.0', 'jQuApache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']

// FUNCTION: create the license section. Evaluate for which license has been selected and display corresponding license badge with URL link to additional license info.
const generateLicenseSection = (license) => {

    switch (license) {
        case 'none':
        case !license:
            return '';
        case 'GNU AGPLv3':
return `
## LICENSE
${license}
${gnuAgplV3Badge}
`;
        case 'GNU GPLv3':
return `
## LICENSE
${license}
${gnuGplV3Badge}
`;
      }

    // if (!license || license==='none') {
    //   return '';
    // }

    // return `
    // ## LICENSE
    // ${license}
    // `
  };


// FUNCTION: will take data input from user and add it to a README template
module.exports = templateData => {
    console.log(templateData);

    // destructure inputs from templateData based on their property key names
    const { title, description, installation, usage, license, confirmQuestions, githubUser, email, contactInstructions} = templateData;

    // const { title, description, installation, usage, license, contributing, tests, confirmQuestions, githubUser, email, contactInstructions} = templateData;

    return `

    # PROJECT TITLE ${title}

    ## DESCRIPTION ${description}

    ## TABLE OF CONTENTS
    ${generateInstallationSection(installation)}${generateUsageSection(usage)}${generateLicenseSection(license)}
    ## CONTRIBUTING
    ## TESTS
    ${generateQuestionsSection(confirmQuestions, githubUser, email, contactInstructions)}
    `;
  };

