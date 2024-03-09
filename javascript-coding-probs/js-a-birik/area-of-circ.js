/*

    Title: Area of circle

    >> Write down a program that will take radius of a circle as input and

    >> will calculate area of the circle

    ## Test ##

    input: 3 output: 28.2744

    input: 5 output: 78.54

*/


function area(radius) {
    let area = 3.1416 * radius * radius;
    return area
}
let circle = area(3);
let totalArea = Math.floor(circle);

// console.log(circle)
// console.log(totalArea)

console.log(area(3));
console.log(area(5))