
// Promises
// A promise is created using the promise constructor.
// The promise constructor takes a callback as an argument
// The callback function takes two arguments - resolve and reject.

// We use resolve when the promise is fulfilled
// We use reject when the promise fails or is rejected


// ============ Creating a promise using a variable ============ 
const users = null;

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

