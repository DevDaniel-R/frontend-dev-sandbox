// defualt function values enables us to say directly on our parameters that if an argument isn't provided and therefore the value is undefined within the funtion the default value for that parameter will be used and we specify this after the wquals operator.
function convertTemperature(celsius, decimalPlaces = 1) {
    // celsius to fahrenheit

    // if statement can be more simplified by the use of the or conditional
    // if(!decimalPlaces) {
    //     decimalPlaces = 1;
    // }

    //we do not have to include this or conditional because we provided a default to the function parameter.
    // decimalPlaces = decimalPlaces || 1;
    const fahrenheit = celsius * 1.8 + 32;
    return Number(fahrenheit.toFixed(decimalPlaces));
}




console.log(convertTemperature(21, 0));