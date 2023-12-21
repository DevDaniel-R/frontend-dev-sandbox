// *Iterating over an object

var username = {
    first: 'John',
    last: 'Doe'
};

// for in loop - The for in loop iterates over a person object. For in loops are one l way to get the values from an object. the next approach is to use a for of loop.
for (let u in username) {
    if (username.hasOwnProperty(u)) {
        console.log(u, username[u]);
    }
}

//for of loop
for (let u of Object.keys(username)) {
    if (username.hasOwnProperty(u)) {
        console.log(u, username[u]);
    }
}

//entries es7 feat. extracted from the array of arrays and when we run that we get the same output property name and corresponding value
Object.entries(username).forEach(([key, value]) => console.log (key, value));


