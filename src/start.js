import { CommandManager } from "./CommandManager/index.js";
import os from "os";

let currentPath = os.homedir();
var username = 'Username';


export const updateCurrentPath = (newPath) => {
    currentPath = newPath;
    console.log(`You are currently in ${currentPath}`);
}


// program initialisation:
process.argv.forEach((element, i, arr) => {
    if (element.startsWith('--username=')) {
        username = arr[i].slice(11);
    } 
});
console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${currentPath}`);


            
const listen = () => {
    process.on('SIGINT', () => {
        console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
        process.exit();
    });
    process.stdin.on('data', data => {
        const manager = CommandManager(currentPath, username);
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