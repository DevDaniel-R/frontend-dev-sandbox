//* FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
    //! default values below not needed since we can now have a default inside parameters.
    //if(typeof firstName === 'undefined'){firstName ='John'}
    //if(typeof lastName === 'undefined'){lastName ='Doe'}
    return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet('Daniel', 'Rodriguez'));



//* FUNCTION EXPRESSION

const square = function(x){
    return x * x;
};

console.log(square(8,))