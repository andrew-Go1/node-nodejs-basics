import { updateCurrentPath } from "../start.js";
import os from "node:os";

export const operationSystem = (currentPath, osParametrs) => {
    switch (osParametrs) {
        case '--EOL':
            console.log(os.EOL);  // need to transform it into the string
            break;
        case '--cpus':
            const cpus = os.cpus();
            console.log(cpus.length);
            cpus.forEach(cpu => console.log(`${cpu['speed']} Ghz`));
            break;
        case '--homedir':
            console.log(os.homedir());
            break;
        case '--username':
            const username = os.userInfo()['username'];
            console.log(username);
            break;
        case '--architecture':
            console.log(os.arch());
            break;
    
        default:
            console.log('Invalid input');
            break;
    }
    updateCurrentPath(currentPath);
}