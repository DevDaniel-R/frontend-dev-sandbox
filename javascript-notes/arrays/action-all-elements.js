const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false },
];

// map method returns a new array
const newTemps = temperatures.map( temperature => 
    //simple if else condition
    // { if ( temperature.degrees > 70 ) {
    //     temperature.recordHigh = true
    // }
    // else if ( temperature.degrees < 70 ) {
    //     temperature.recordHigh = false
    // }
    // return temperature; }
    //? instead of if else how about we try using conditionals with ternaries
    temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
);
console.log(newTemps)

newTemps.forEach( temperature => {
    if ( temperature.isHigh) {
        alert(`Temperature ${temperature.degrees} was a record high last week!`);
    }
})