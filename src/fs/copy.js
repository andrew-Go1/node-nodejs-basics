import { promises as fs } from 'fs';
import path from "path";
import { updateCurrentPath } from '../start.js';

export const copy = async (currentPath, oldFileName, newFileName) => {
    const absPathOldFile = path.join(currentPath, oldFileName);
    const absPathNewFile = path.join(currentPath, newFileName);
    await fs.cp(absPathOldFile, absPathNewFile)
        .catch(() => console.log('Operation failed'));
    updateCurrentPath(currentPath);

}