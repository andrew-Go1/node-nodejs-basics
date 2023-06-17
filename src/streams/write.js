import { createWriteStream } from 'fs';

const write = async () => {
    // Write your code here 
    try {
        const fileStream = createWriteStream('./src/streams/files/fileToWrite.txt');
        process.stdin.on('data', data => {
            fileStream.write(data.toString(), 'utf8');
            process.exit();
        })
        //fileStream.end(); // super stupid 
    } catch (error) {
        throw error
    }
};

await write();