//! Note - only true statements will execute. 
if (true) { console.log('This is true'); }
if (false) { console.log('This is false'); }

//! Note - var is not block level scoped, it's function scoped. If I were to say var Z in a function, I can't use it outside of that in the global scope, but with other blocks like loops and if statements it's not scoped. 
//* Ex:
const x = 10;
const y = 5;

if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`)
}

console.log(z);
