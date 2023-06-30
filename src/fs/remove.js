import { promises as fs } from 'fs';
import path from "path";
import { updateCurrentPath } from '../start.js';

export const remove = async (currentPath, fileName) => {
    const absFilePath = path.join(currentPath, fileName);
    await fs.unlink(absFilePath)
        .catch(() => console.log('Operation faild'));
    updateCurrentPath(currentPath);
};