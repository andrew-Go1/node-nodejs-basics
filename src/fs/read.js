import { promises as fs } from 'fs';
import path from "path";
import { updateCurrentPath } from '../start.js';

export async function read(currentPath, fileName) {
    const absFilePath = path.join(currentPath, fileName);
    await fs.readFile(absFilePath, { encoding: 'utf8' })
        .then(content => console.log(content))
        .catch(() => console.log('Operation failed'))
    updateCurrentPath(currentPath);

};