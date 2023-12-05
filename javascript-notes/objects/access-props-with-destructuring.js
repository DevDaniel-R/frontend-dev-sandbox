const user = {
    name: "Reed",
    username: "ReedBarger",
    email: "reed@gmail.com",
    details: {
        title: "Programmer"
    }
};

// Object destructuring allows us to pull whatever properties that we want out of objects and conveniently make them variables which as you can see makes our code a lot more readable and concise. Destructuring let us grab only the stuff we need without having to reference the entire object each time we want to use data off of it.

//? const { username, email } = user;

//? function displayInformation () {
//?     console.log(`Username: ${username}, Email: ${email}`)
//? }
//? displayInformation()


// To destructure further into an object, for example, an object within an object, we use another level of destruction within the overall destructure syntax like we did below.

//? const { username, email, details:{ title } } = user;

//? function displayUserBio() {
//?     console.log(`Username: ${username}, Email: ${email}, Title: ${title}`)
//? }
//? displayUserBio()

//We can also apply Object destructuring to functions by passing it as a parameter to our function - to pass the user data as an argument we pass the entire user object to display user bio.

function displayUserBio({ name, details: { title } }) {
    console.log(`${name} is a ${title}`);
}
displayUserBio(user)