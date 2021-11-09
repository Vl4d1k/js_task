function main(localResult = 1, maxConcurrent = 35) {
    if (localResult === 0) return 0;
    
    let proccessCount = 1;
    let result = 1 * localResult;
    buggle(n, main)
    
    return result;
}

function buggle(n, callback) {
    setTimeout(() => {
        let result = getRandomInt(n);
        console.log("local result: ", result);
        callback(result);
    }, 1000);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log('main function: ', main())