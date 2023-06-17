const parseEnv = () => {
    // Write your code here 
    const variables = process.env //{'RSS_1': 'rssValue'}//;
    const rssVariablesNames = Object.keys(variables)

    rssVariablesNames.forEach((variableName) => { 
        if (variableName.startsWith('RSS_')) {
            console.log(variableName, '=', variables[variableName])
        }
    })
};

parseEnv();