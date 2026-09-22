function Student(){
    console.log("my name is chinedu");
    console.log("my name is chinedu");
    console.log("my name is chinedu");
}

Student();


function greetuser(){
    return "welcome to our platform";
}
let message = greetuser();
console.log(greetuser());


// single parameter
function StudentName(name){
  return `hello, my name is ${name}`;
}

console.log(StudentName("Obi"));




// multiple parameters

function StudentsInfor(name, age, email){
     console.log(`My name is ${name}, i am ${age}  years old, This is my email ${email}.`);
    }

    StudentsInfor("Peter", 21, "peter@gmail.com");
    StudentsInfor("John", 19, "John@gmail.com");