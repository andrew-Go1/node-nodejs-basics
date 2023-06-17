import { fork } from "child_process";

const spawnChildProcess = async (args) => {
    // Write your code here
    try {
        const child = fork('./src/cp/files/script.js', args, { silent: true });
        
        process.stdin.pipe(child.stdin);
        child.stdout.pipe(process.stdout);

    } catch (error) {
        throw error
    }
    
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['Make', 'A', 'Smile', 'Please'] );