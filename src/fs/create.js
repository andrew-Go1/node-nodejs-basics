import { promises as fs } from 'fs';
import path from "path";
import { updateCurrentPath } from '../start.js';

export const create = async (currentPath, fileName) => {
    const absFilePath = path.join(currentPath, fileName);
    await fs.writeFile(absFilePath, '')
        .catch(() => 'Invalid input')
    updateCurrentPath(currentPath);
};