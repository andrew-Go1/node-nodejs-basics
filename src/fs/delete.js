import { promises as fs } from 'fs';

const remove = async () => {
    // Write your code here 
    try {
        await fs.unlink('./src/fs/files/fileToRemove.txt')
    } catch (err) {
        throw err
    }
};

await remove();