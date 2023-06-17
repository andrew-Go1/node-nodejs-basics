import { promises as fs } from 'fs';

const copy = async () => {
    // Write your code here 
    try {
        fs.cp('./src/fs/files/', './src/fs/files_copy/', { recursive: true })
    } catch(err) {
        throw err
    }
}

await copy();
