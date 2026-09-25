// FOR EACH METHOD
const students = [
    {
        name: "Chinedu",
        age: 22,
        course: "Computer Science"
    },
    {
        name: "Amaka",
        age: 20,
        course: "Information Technology"
    },
    {
        name: "David",
        age: 24,
        course: "Software Engineering"
    }
];

students.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - ${student.course} `);
});

// for each method 2nd exesise

const users = [
    {
        name: "obinna okafor",
        age: 45,
        occupation: "Doctor"
    },
    {
        name: "okeke okafor",
        age: 45,
        occupation: "driver"
    },
    {
        name: "Njeze okafor",
        age: 65,
        occupation: "journalist"
    },
    {
        name: "obinna okafor",
        age: 35,
        occupation: "farmer"
    }
];

users.forEach((users, index) => {
    console.log(
        `${index + 1}. My name is ${users.name}, I am ${users.age} years old. I am a ${users.occupation}.`
    );
});


// for map method

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((number) => {
    return number * 2;
});

console.log(doubled);