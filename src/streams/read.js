import { createReadStream } from 'fs';

const read = async () => {
    // Write your code here 
    try {
        const fileStream = createReadStream('./src/streams/files/fileToRead.txt', 'utf8');
        const input = fileStream.on('data', chunk => {
            return chunk;
        })
        console.log(input);
    } catch (error) {
        throw error
    }
};

await read();