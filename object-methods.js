// object- method
const person = {
    name: "John Doe",
    age: 55,
    role: "Senior Analyst"
};

// key method

console.log(Object.keys(person)); // [ 'name', 'age', 'role' ]


// values method
console.log(Object.values(person)); // [ 'John Doe', 55, 'Senior Analyst' ]

// entries method
console.log(Object.entries(person)); // [ [ 'name', 'John Doe' ], [ 'age', 55 ], [ 'role', 'Senior Analyst' ] ]
