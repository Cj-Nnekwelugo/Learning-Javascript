const person = {
    name: "John Doe",
    age: 15
}

console.log(person);

// Try catch block
try {
    const age = 10;
    if (age < 18) {
        throw new Error("User is below the age of 18");
    }
} catch (error) {
    // console.log(error);
    // console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
}