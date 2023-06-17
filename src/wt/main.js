import { Worker } from "worker_threads";

const promises = [];

function runService(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
    })
}

const performCalculations = async () => {
    // Write your code here
    for (let index = 10; index < 14; index++) {
        promises.push(
            runService(index)
                .then(
                    result => {return { status: 'resolved', data: result }},
                    () => {return { status: 'error', data: null }}
                )
            )
    }
    Promise.all(promises)
        .then(result => console.log(result))
};

await performCalculations();

