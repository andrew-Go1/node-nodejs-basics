import { promises as fs } from 'fs';
import path from "path";
import { updateCurrentPath } from '../start.js';

export const rename = async (currentPath, oldFileName, newFileName) => {
    const absPathOldFile = path.join(currentPath, oldFileName);
    const absPathNewFile = path.join(currentPath, newFileName);
    await fs.rename(absPathOldFile, absPathNewFile)
        .catch(() => console.log('Operation Faild'))
    updateCurrentPath(currentPath);
};