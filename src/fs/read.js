import { promises as fs } from 'fs';

const read = async () => {
    // Write your code here 
    try {
        const content = fs.readFile('./src/fs/files/fileToRead.txt', { encoding: 'utf8' })
        content.then(content => console.log(content));
    } catch (error) {
        throw error
    }
};

await read();