const fs = require('fs').promises; // Import the promises API from fs module

// Function to read the contents of a file
function textFile(filename) {
    return fs.readFile(filename, 'utf8');
}

// Q1. QUIET TIMES
async function activityTable(day) {
    try {
        let logFileList = await textFile("camera_logs.txt");
        let logFiles = logFileList.split('\n').filter(Boolean); // Filter out any empty lines

        // Initialize an array with 24 zeros for each hour
        let hourlyCounts = Array(24).fill(0);

        // Process each log file
        await Promise.all(logFiles.map(async (logFile) => {
            let logContent = await textFile(logFile);
            let timestamps = logContent.split('\n').filter(Boolean);
            
            timestamps.forEach((timestamp) => {
                let date = new Date(Number(timestamp));
                if (date.getDay() === day) {
                    hourlyCounts[date.getHours()]++;
                }
            });
        }));

        return hourlyCounts;
    } catch (error) {
        console.error("Error processing logs:", error);
    }
}

// Q2. REAL PROMISES
function activityTableWithoutAsync(day) {
    return textFile("camera_logs.txt")
        .then(logFileList => {
            let logFiles = logFileList.split('\n').filter(Boolean);
            let hourlyCounts = Array(24).fill(0);
            
            // Create an array of promises for processing each log file
            let logPromises = logFiles.map(logFile => {
                return textFile(logFile)
                    .then(logContent => {
                        let timestamps = logContent.split('\n').filter(Boolean);
                        timestamps.forEach((timestamp) => {
                            let date = new Date(Number(timestamp));
                            if (date.getDay() === day) {
                                hourlyCounts[date.getHours()]++;
                            }
                        });
                    });
            });

            // Wait for all promises to resolve
            return Promise.all(logPromises).then(() => hourlyCounts);
        })
        .catch(error => {
            console.error("Error processing logs:", error);
        });
}

// Q3. Building Promise.all
function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let remaining = promises.length;

        if (remaining === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                results[index] = value;
                remaining--;

                if (remaining === 0) {
                    resolve(results);
                }
            }).catch(reject); // Reject the entire Promise_all if any promise fails
        });
    });
}

// Helper function for testing Promise_all
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}

// Output for Q1
activityTable(1)
    .then(table => {
        console.log("----- Q1. QUIET TIMES -----");
        console.log("Activity Table for Monday:", table);
        // Assuming activityGraph function is available in your environment
        console.log("Activity Graph:", activityGraph(table));
    });

// Output for Q2
activityTableWithoutAsync(6)
    .then(table => {
        console.log("----- Q2. REAL PROMISES -----");
        console.log("Activity Table for Saturday:", table);
        // Assuming activityGraph function is available in your environment
        console.log("Activity Graph:", activityGraph(table));
    });

// Output for Q3
Promise_all([])
    .then(array => {
        console.log("----- Q3. Building Promise.all -----");
        console.log("This should be []:", array);
        return Promise_all([soon(1), soon(2), soon(3)]);
    })
    .then(array => {
        console.log("This should be [1, 2, 3]:", array);
        return Promise_all([soon(1), Promise.reject("X"), soon(3)]);
    })
    .catch(error => {
        console.log("We should not get here");
    })
    .catch(error => {
        console.log("Expected failure:", error);
    });
