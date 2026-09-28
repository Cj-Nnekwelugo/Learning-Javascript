// FETCH API

// GET REQUEST
// Using promise chaining
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// Using async and await
async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error.message);
    } 
}

 getAllUsers()


 // POST REQUEST
const createNewPost = async () => {
    const newPost = {
        title: "Learning APIs",
        userId: 55,
        content: "APIs allow two systems to communicate",
    }
    try {
        const response = await fetch("https://dummyjson.com/posts/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        });
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

createNewPost();
