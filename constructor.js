function Person(name, email) {
    this.name = name;
    this.email = email;
}

Person.prototype.introduce = function() {
        return `My name is ${this.name}`;
    } 

const person1 = new Person("John Doe", "john@mail.com");
const person2 = new Person("Seth Golden", "seth@email.com");
console.log(person1);
console.log(person1.introduce());
console.log(person2);
console.log(person2.introduce());

