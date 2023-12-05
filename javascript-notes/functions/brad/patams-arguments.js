function registerUser(user) {
    return user + ' is registered';
}

console.log(registerUser('John'));

//defualt value before es6 bot
function registerUser1(user) {
    if (!user) {
        user = 'Bot';
    }

    return user + ' is registered'
}

console.log(registerUser1());

// ES6 default parameters
function registerUser2(user = 'Daniel') {
    if (!user) {
        user = 'Bot';
    }

    return user + ' is registered'
}

console.log(registerUser2());

// Rest Operators Params
function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1,2,3,4,5))