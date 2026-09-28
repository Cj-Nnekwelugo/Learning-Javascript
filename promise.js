const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received!");
    }, 2000);

});





// Promises
// A promise is created using the promise constructor.
// The promise constructor takes a callback as an argument
// The callback function takes two arguments - resolve and reject.

// We use resolve when the promise is fulfilled
// We use reject when the promise fails or is rejected
