import { Transform } from 'stream';

const transform = async () => {
    // Write your code here 
    try {
        const inputStream = process.stdin;
        const outputStream = process.stdout;

        const reverse = new Transform({
            transform(chunk, encoding, callback) {
                callback(null, chunk.toString().split('').reverse().join(''));
            },
        });

        inputStream.pipe(reverse).pipe(outputStream);
    } catch (error) {
        throw error;
    }
};
await transform();