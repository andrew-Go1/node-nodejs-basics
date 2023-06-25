import { promises as fs } from 'fs';
import { updateCurrentPath } from '../start.js';

export const list = async (path) => {
    // Write your code here 
    try {
        const files = await fs.readdir(path, { recursive: true })
        files.forEach(file => console.log(file))
        updateCurrentPath(path);
    } catch (error) {
        throw error
    }
};