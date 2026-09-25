class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;

    }

    introduce() {
        console.log(`My name is ${this.name}, i am ${this.age} years old, i am a ${this.occupation}.`);
    }
}

const person1 = new Person("John Doe", 33, "Farmer");
console.log(person1);
person1.introduce();