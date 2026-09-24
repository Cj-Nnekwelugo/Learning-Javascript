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

