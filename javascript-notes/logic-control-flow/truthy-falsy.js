//TODO Falsy Values : FALSE, 0, "" or '' (empty string), NULL, UNDEFINED, NaN
const x = false;
//? Checking for empty arrays
const post = ["Post One"];

if (post.length > 0) {
    console.log('List posts');
} else {
    console.log('No Post to List');
}

//?Checking for empty objects
    const user = {
        name: 'Brad',
    };

    if (Object.keys(user).length > 0) {
        console.log('list User');
    } else {
        console.log('No User')
    }

//? Loose Equality ( == ) We should stick to using triple (===) because it checks type aswell.
    console.log(false === 0);
    console.log('' === 0);
    console.log(null === undefined);