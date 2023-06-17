import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { unzip } from "zlib";
import { promisify } from "util";

const do_unzip = promisify(unzip);
//const pipe = promisify(pipeline);

const buffers = [];

const decompress = async () => {
    // Write your code here 
    try {
        const source = createReadStream('./src/zip/files/archive.gz');
        for await (const data of source) {
            buffers.push(data);
        }
        const finalBuffer = Buffer.concat(buffers);
        
        const destination = createWriteStream('./src/zip/files/fileToCompress.txt');
        do_unzip(finalBuffer)
            .then((buf) => destination.write(buf.toString(), 'utf8'))
    } catch (error) {
        throw error
    }
};

await decompress();