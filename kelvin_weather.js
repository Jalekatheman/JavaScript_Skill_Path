const kelvin = 0; //This is a const to maintain the value

console.log(`The temperature is ${kelvin} degrees Kelvin.`);

const celsius = kelvin - 273; //This is the value of celsius degrees

console.log(`The temperature is ${celsius} degrees Celsius.`);

let newton = celsius * (33 / 100); // Convert to Newton

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

let fahrenheit = celsius * (9 / 5) + 32; // convert from Celsius to Fahrenheit

fahrenheit = Math.floor(fahrenheit); //Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
