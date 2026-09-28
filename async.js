console.log("First");

setTimeout(() => {
    console.log("Second");
}, 2000);

console.log("Third");

function sayUserName() {
    console.log("Say my name is John Doe after 3s");
}

setTimeout(sayUserName, 3000);

console.log("Hello world");
console.log("Fetching data from server... (10 secs)");
console.log("My name is John Doe");

// real time 
console.log("Starting...");

setTimeout(() => {
    console.log("Users received!");
}, 3000);

console.log("Showing website...");