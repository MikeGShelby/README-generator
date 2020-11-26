const generatePage = (title, github) => {
    return `

    # ${title}

    ## [DESCRIPTION]

    ## [TABLE OF CONTENTS]

    ## [INSTALLATION]

    ## [USAGE]

    ## [LICENSE]

    ## [CONTRIBUTING]

    ## [TESTS]

    ## [QUESTIONS]
        ### [GITHUB USERNAME] ${github}
        ### [GITHUB PROFILE LINK] https://github.com/${github}

        ### [EMAIL ADDRESS]
        ### [INSTRUCTIONS ON HOW TO REACH ME]

    `;
  };

module.exports = generatePage;