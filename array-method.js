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

