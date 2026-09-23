const user = (name, age, email, occupation) => {
   return{
    name,
    age,
    email,
    occupation
   }
};

const userData = user("cj", 19, "cj@gmail.com", "full-stack dev" );
console.log(userData);