import { createHash } from 'crypto';
import { promises as fs } from 'fs';
import path from "path";
import { updateCurrentPath } from '../start.js';

export const calculateHash = async (currentPath, fileName) => {
    const absFilePath = path.join(currentPath, fileName);
    await fs.readFile(absFilePath)
        .then((fileBuffer) => console.log(createHash('sha256').update(fileBuffer).digest('hex')))
        .catch(() => console.log('Operation failed'));
    updateCurrentPath(currentPath);
};