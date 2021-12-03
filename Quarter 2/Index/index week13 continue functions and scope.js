//Function declaration

//There is no parameter
function func() {}
//Arrow function with zero parameter
func = () => {};


//Function with one parameter
function func2 (name) {
    return "Hello" + name;
}
//Arrow function with one parameter
func2 = (name) => {
    return "Hello" + name;
}


//Exercise 1: Function with parameter
function platNeedsWater(day) {
    if(day==='Wednesday'){
        return true;
    } else {
        return false;
    }

 };

console.log(platNeedsWater("Tuesday"))

//Arrow function with parameter
platNeedsWater = day =>  {
    if(day==='Wednesday'){
        return true;
    } else {
        return false;
    }

 };
 console.log(platNeedsWater("Tuesday"))

//Scope!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1111111111111111111111111111111111111

const city = "Seoul"
function logCitySkyline() {
    const skyscraper = '63 Building'
    //Variable city is accessible inside the function!
    console.log(city)
} 
//Skyscraper is not accessible inside the function! ReferenceError 
console.log(logCitySkyline())
//Global variable is like this:
//let blue = "color" <=
//function sasdgjpaspd() {

//}
//If blue was declared inside the block, only the block had ccess to it.
const LSC = () => {
    let color = 'blue' //Scope block
    console.log(color) 
}
// console.log(LSC(color)) This will cause reference error!
//Scope pollution
let num = 50; //<= original
const logNum = () => {
    num = 100; //polluted! value changes!
    console.log(num)
}
