const parseArgs = () => {
    // Write your code here 
    let finalOutput = ''
    for (let index = 0; index < process.argv.length; index++) {
        const element = process.argv[index];
        let isName, isValue;
        if (index % 2 == 0) {
            isName = element.slice(2)
            finalOutput += (isName + ' is ')
        } else {
            isValue = element;
            finalOutput += (isValue + ', ')
        }
    }
    console.log(finalOutput);
};

parseArgs();