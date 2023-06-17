import { promises as fs } from 'fs';

const list = async () => {
    // Write your code here 
    try {
        const files = await fs.readdir('./src/fs/files', { recursive: true })
        files.forEach(file => console.log(file))
    } catch (error) {
        throw error
    }
};

await list();