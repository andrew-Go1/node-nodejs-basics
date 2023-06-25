import { CommandManager } from "./CommandManager/index.js";
import os from "os";

let currentPath = os.homedir();


export const updateCurrentPath = (newPath) => {
    currentPath = newPath;
    console.log(`You are currently in ${currentPath}`);
}


// program inicialisation:
process.argv.forEach((element, i, arr) => {
    if (element.startsWith('--username=')) {
        const username = arr[i].slice(11);
        console.log(`Welcome to the File Manager, ${username}!`);
    } 
});
console.log(`You are currently in ${currentPath}`);


/*
process.stdin.resume();
function exitHandler(options, exitCode) {
    if (options.cleanup) console.log('clean');
    if (exitCode || exitCode === 0)
        console.log('exit');
    if (options.exit) process.exit();
}

process.stdin.on('exit', exitHandler.bind(null, { cleanup: true }));
process.stdin.on('SIGINT', () =>    console.log('exit'));
*/
            
const listen = () => {
    process.stdin.on('data', data => {
        const manager = CommandManager(currentPath);
        const commands = String(data).trim().split(" ");
        const funcName = commands[0]
        commands.splice(0, 1)

        if (manager.hasOwnProperty(funcName)) {
            manager[funcName](...commands);
        } else {
            console.log('Invalid input');
        }
    });

}

listen();