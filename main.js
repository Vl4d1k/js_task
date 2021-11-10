function getRandomInt(max) {
    return Math.floor(Math.random() * max + 2);
}

function buggle(n, callback) {
    setTimeout(() => {
        let result = getRandomInt(n);
        console.log("result", result);
        callback(result)
    }, 1000);
}

function main(localResult = 1, proccessCount = 1, iterationCount = 0, maxConcurrent = 35) {
    if (localResult === 0) return 0;
    if (iterationCount > 5) return localResult;

    return buggle(iterationCount, (result) => {
        main(result * localResult, proccessCount++, iterationCount++)
    });
}

let result = main();

console.log('main function: ', result);