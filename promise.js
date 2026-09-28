const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received!");
    }, 2000);

});
