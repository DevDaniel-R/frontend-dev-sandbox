// FizzBuzz - divisible 3  Fiz   divisible 5 = Buzzz  divisible 3 & 5 = FizzBuzz
function FizzBuzz(num){
    for (var i = 1; i <= num; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else console.log(i);
    }
    
}
FizzBuzz(20);
