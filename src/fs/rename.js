import { promises as fs } from 'fs';

const rename = async () => {
    // Write your code here 
    try {
        await fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md')
    } catch (err) {
        throw err
    }
};

await rename();