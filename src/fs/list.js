import { promises as fs } from 'fs';
import { updateCurrentPath } from '../start.js';

export const list = async (path) => {
    const folders = [];
    const linksAndFiles = [];
    try {
        const files = await fs.readdir(path, { withFileTypes: true });
        files.forEach(file => {
            if (file.isDirectory()) {
                folders.push(file['name']);
            } else if (file.isFile() || file.isSymbolicLink()) {
                linksAndFiles.push(file['name']);
            }
        });
        folders.forEach(folder => {
            console.log(`### ${folder}`);
        });
        linksAndFiles.forEach(linkOrFile => console.log(linkOrFile));
        updateCurrentPath(path);
    } catch (error) {
        throw error
    }
};