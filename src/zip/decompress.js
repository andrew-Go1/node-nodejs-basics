import { createReadStream, createWriteStream } from "fs";
import { unzip } from "zlib";
import { promisify } from "util";

import path from "path";
import { updateCurrentPath } from "../start.js";



const do_unzip = promisify(unzip);
//const pipe = promisify(pipeline);

const buffers = [];

export const decompress = async (currentPath, ZipName, FileName) => { // It's doesnt WORK
    const absZipPath = path.join(currentPath, ZipName);
    const absFilePath = path.join(currentPath, FileName);
    const source = createReadStream(absZipPath);
    for await (const data of source) {
        buffers.push(data);
    }
    const finalBuffer = Buffer.concat(buffers);
    
    const destination = createWriteStream(absFilePath);
    do_unzip(finalBuffer)
        .then((buf) => destination.write(buf.toString()));
    updateCurrentPath(currentPath);
};