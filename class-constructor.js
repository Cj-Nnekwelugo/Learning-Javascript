class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }
}

const person1 = new Person("John Doe", 33);
console.log(person1);
person1.introduce();