//Homework 2

//We will create a variable called Kelvin, and because we need to fix the variable, we will use const.
let kelvin = 293;

//Celcius is 273 degrees less than Kelvin!
//We will use the idea above to create a Kelvin to Celcius converter variable!
//We will need to create a new variable and make it equal to kelvin - 273.
const celcius = kelvin - 273;
//We will do the same thing above to make a new variable called fahrenheit. Note that we will put celcius in the right side fo the equation, and to (9/5) + 32 to it. We will need to use floor to round it down, since we hate decials.z
const fahrenheit = (Math.floor(Math.random(celcius) * (9/5) + 32));

const forecast = (`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//By the way, 0 degrees Kelvin is 32 degrees Fhrenheit
console.log(forecast);