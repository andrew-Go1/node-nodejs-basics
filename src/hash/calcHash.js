import { createHash } from 'crypto';
import { promises as fs } from 'fs';

const calculateHash = async () => {
    // Write your code here 
    try {
        const fileBuffer = await fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', { encoding: 'utf8' });
        const hash = createHash('sha256').update(fileBuffer).digest('hex');
        console.log(hash);
    } catch(error) {
        throw error
    }
};

await calculateHash();