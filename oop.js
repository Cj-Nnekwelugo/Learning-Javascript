/* 
You're building a simple system for a school.

Create a Person class with a constructor that takes name and age, and a method introduce() that logs:
 "Hi, my name is [name] and I am [age] years old."

Then create a Student class that inherits from Person. It should:
Accept name, age, and an additional grade property
Have its own method study() that logs: "[name] is studying for grade [grade]."
Still be able to use the introduce() method from Person
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    introduce() {
        console.log(`Student name is ${this.name} and student age is ${this.age} years old.`);
    }

    study() {
        console.log(`${this.name} is studying for grade ${this.grade}.`);
    }
}
const person1 = new Person("John Doe", 25); 
console.log(person1);
person1.introduce();

const student1 = new Student("Somto Ikem", 23, "A+");
console.log(student1);
student1.introduce();
student1.study();


const user = {
    name: "Mandy",
    introduce() {
        console.log(`Hello ${this.name}`);
    }
}
console.log(user);
user.introduce();