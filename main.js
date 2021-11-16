const MAX_CONCURRENT = 35;

function fork(async_calls, shared_callback) {
    var counter = async_calls.length;
    var all_results = [];

    function makeCallback(index) {
        return function () {
            counter--;
            console.log(counter)
            var results = [];
            for (var i = 0; i < arguments.length; i++) {
                results.push(arguments[i]);
            }
            all_results[index] = results;
            if (counter == 0) {
                shared_callback(all_results);
            }
        };
    }

    for (var i = 0; i < async_calls.length; i++) {
        async_calls[i](makeCallback(i));
    }
}

function A (c) { buggle(1, c) };

function D (result) {
  console.log('result IN D FUNCTION: ', result);
}

const createArray = length => Array.from(
    { length },
    (_, i) => function(callback) { buggle(i, callback) }
  )


fork(createArray(15), D);

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

function buggle(n, callback) {
    setTimeout(() => {
        let result = getRandomInt(n);
        console.log("result: ", result);
        console.log("n: ", n);
        callback(result);
    }, getRandomInt(1));
}

function callbackFunction(
    localResult = 1,
    proccessCount = 1,
    iterationCount = 0
) {
    console.log("+-----------------+");
    console.log("proccessCount: ", proccessCount);
    console.log("localResult: ", localResult);
    if (localResult === 0) return 0;

    console.log("iterationCount: ", iterationCount);
    if (iterationCount > 5) return localResult;

    // if (proccessCount > 1) {
    //     proccessCount--;
    // }

    return buggle(iterationCount, (result) => {
        proccessCount++;
        iterationCount++;
        main(result * localResult, proccessCount, iterationCount);
    });
}

// function buggle(n, callback) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//           let result = getRandomInt(n);
//         console.log("result", result);
//         resolve(result);
//       }, 1000);
//     });
//   }

// console.log('main function: ', main() );
