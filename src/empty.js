import path  from "path";

const pathSeparator = path.sep;
const pathBasename = path.basename('./src/streams/files/fileToRead.txt');
const parstPath = path.parse('/home/andrew/Документы/Projects/rs_school/node-nodejs-basics-main/src/empty.js');
const pathIsAbsolute = path.isAbsolute('/src/streams/files/fileToRead.txt')

let result = path.dirname('/public_html');
console.log('%cThis text is red!', 'color: red');
