
// Promises
// A promise is created using the promise constructor.
// The promise constructor takes a callback as an argument
// The callback function takes two arguments - resolve and reject.

// We use resolve when the promise is fulfilled
// We use reject when the promise fails or is rejected


// ============ Creating a promise using a variable ============ 
const users = ["John", "Mary", "David"];

const getUsersData = new Promise((resolve, reject) => {
    if (!users) {
        setTimeout(function() {
            reject("No users data is available");
        }, 5000);
        return;
    }

    setTimeout(function() {
        resolve(users);
    }, 5000);
});

getUsersData
    .then(result => console.log(result))
    .catch(error => console.log(error));




// Creating a promise using a function

function doMultiply() {
    return new Promise((resolve, reject) => {
        const isMathStudent = true;

        if (isMathStudent) {
            resolve(60);
        } else {
            reject(0);
        }
    });
}

doMultiply()
    .then(result => result)
    .then(num => num * 3)
    .then(data => console.log(data))
    .catch(err => console.log(err));


    // Async and await
async function getLuckyNumber() {
    return 5;
}

// console.log(getLuckyNumber());

const getLuckyNumberResult = async () => {
    const result = await getLuckyNumber();
    console.log(result);
}

getLuckyNumberResult();