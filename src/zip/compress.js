import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { createGzip } from "zlib";
import { promisify } from "util";

const pipe = promisify(pipeline);

const compress = async () => {
    // Write your code here 
    try {
        const gzip = createGzip();
        const source = createReadStream('./src/zip/files/fileToCompress.txt');
        const destination = createWriteStream('./src/zip/files/archive.gz');
        pipe(source, gzip, destination); 
    } catch (error) {
        throw error
    }
};

await compress();