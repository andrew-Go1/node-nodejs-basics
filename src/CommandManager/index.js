import { list } from '../fs/list.js';
import { cd } from '../fs/cd.js';
import { up } from '../fs/up.js';
import { read } from '../fs/read.js';
import { create } from '../fs/create.js';
import { rename } from '../fs/rename.js';
import { copy } from '../fs/copy.js';
import { remove } from '../fs/remove.js';
import { calculateHash } from '../hash/calcHash.js';
import { compress } from '../zip/compress.js';
import { decompress } from '../zip/decompress.js';
import { operationSystem } from './operationSystem.js';

 
export function CommandManager(currentPath, username) {
    return {
        'ls': () => list(currentPath),
        'cd': (wishingPath) => cd(currentPath, wishingPath),
        'up': () => up(currentPath),
        'cat': (fileName) => read(currentPath, fileName),
        'add': (fileName) => create(currentPath, fileName),
        'rn': (oldFileName, newFileName) => rename(currentPath, oldFileName, newFileName),
        'cp': (oldFileName, newFileName) => copy(currentPath, oldFileName, newFileName),
        'rm': (fileName) => remove(currentPath, fileName),
        'hash': (fileName) => calculateHash(currentPath, fileName),
        'compress': (FileName, ZipName) => compress(currentPath, FileName, ZipName),
        'decompress': (ZipName, FileName) => decompress(currentPath, ZipName, FileName),
        'os': (osParametrs) => operationSystem(currentPath, osParametrs),
        '.exit': () => { 
            console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
            process.exit();
        }
    }
}