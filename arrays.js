// Using array literal
let furits = ["apple", "orange", "bannan", "grap", "mango", "pear"];
console.log(furits.length);


 const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Brown",
        "Black",
        "White",
        "Gray",
        "Cyan"
    ];

    function getAnyRandomColor(colorsArray) {
        const randomColorIndex = Math.floor(Math.random() * colorsArray.length);
        return colorsArray[randomColorIndex];
    }

    console.log(getAnyRandomColor(colors));

// Arrays and Loops

const hobbies = ["reading", "dancing", "coding", "travelling"];

// Using for loop
for (let index = 0; index < hobbies.length; index++) {
    console.log(hobbies[index]);
}


// array methods

const workers = ["obi", "obinna", "chinedu", "okeke"];

// 1 push method to add
workers.push("maxwell", "peter");
console.log(workers);

// 2. Pop Method to remove the last 
workers.pop();
workers.pop();
console.log(workers);

// 3. Unshift Method to add in the front
workers.unshift("mariam", "pascal");
console.log(workers);

// 4 shift to remove the first element
workers.shift();
console.log(workers);

// 5. Concat Method
const roles = ["devops", "frontend", "backend"];
const workersAndRoles = workers.concat(roles);
console.log(workersAndRoles);

// 6. Join Method
// [ 'pascal', 'john', 'sax', 'emma', 'andy' ]
// pascal, john, sax, emma, andy
console.log(workers.join(", "));


// 7. Slice Method
const cars = ["toyota", "benz", "lexus", "ford", "bmw", "chevrolet"];
console.log(cars.slice(2));
console.log(cars.slice(4));
const carResult = cars.slice(4, 5);
console.log(cars);
console.log(carResult);