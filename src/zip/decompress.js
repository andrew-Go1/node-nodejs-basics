import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";
import path from "path";
import { updateCurrentPath } from "../start.js";


export const decompress = async (currentPath, ZipName, FileName) => {
    const absZipPath = path.join(currentPath, ZipName);
    const absFilePath = path.join(currentPath, FileName);
    const source = createReadStream(absZipPath);
    const destination = createWriteStream(absFilePath);

    try {
        await pipeline(
            source,
            createGunzip(),
            destination
        )
    } catch (error){
        throw Error(error);
    }
    
    updateCurrentPath(currentPath);
};