function runSomething(callback) {
    callback();
}

runSomething(function() {
    console.log("Hello!");
});

// this is the callback function() {
 //   console.log("Hello!");
// }

// Example of callback functions
function calculateTotal(price, taxRate) {
    return price + (price * taxRate);
}

function processOrder(cb, itemName, price) {
    const totalAmountPaid = cb(price, 0.1);

    console.log("Receipt of payment");
    console.log(`Item: ${itemName}`);
    console.log(`Total price: ${totalAmountPaid}`);
}

processOrder(calculateTotal, "Laptop", 980000);



// Uses of Callback functions

// Flexibility
// They can be used to handle asynchronous waiting
// They play a key role in event handling

// callback using arrow function


