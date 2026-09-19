/* 
camelCase: firstName, isUserLoggedIn

snake_case: first_name, country_of_residence

kebab-case: first-name, is-user-logged-in

PascalCase: FirstName, IsUserLoggedIn
*/

let count = 10;
count = 15;
console.log(count);


// const
/* 
- It is block scoped
- It does not support reassignment
- It does not support redeclaration
- It does not allow declaring a variable without assignment
*/
// const user;

// Scoping
// Var has a function scope
// let and const have a block scope

// Global
// local - function or block
//  A block is anything inside a curly brace {  }

let userName = "John Doe";
var isUserLoggedIn = true;

{
    console.log(userName);
    const person = "John Williams";
    console.log(person);

    var isSchoolOpen = false;
}

console.log(isSchoolOpen);

{
    let name = "cj";
    let age = 19
console.log(name);
console.log(age);
let isUserLoggedIn = true;
console.log(isUserLoggedIn);
}