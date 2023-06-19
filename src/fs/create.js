import { promises as fs } from 'fs';

const create = async () => {
    // Write your code here 
    try {
        await fs.writeFile('./src/fs/files/fresh.txt', 'I am fresh and young');
    } catch(error) {
        throw error
    }
};

await create();