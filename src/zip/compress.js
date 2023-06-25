import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { createGzip } from "zlib";
import { promisify } from "util";
import path from "path";
import { updateCurrentPath } from '../start.js';

const pipe = promisify(pipeline);

export const compress = async (currentPath, FileName, ZipName) => {
    const absFilePath = path.join(currentPath, FileName);
    const absZipPath = path.join(currentPath, ZipName);
    console.log(absFilePath, absZipPath);
    const gzip = createGzip();
    const source = createReadStream(absFilePath);
       // .cath(() => console.log('Invalid input')); // it's shuldont work
    const destination = createWriteStream(absZipPath)
    await pipe(source, gzip, destination); 
    updateCurrentPath(currentPath);
};