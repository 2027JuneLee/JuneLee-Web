function greetWorld() {
    console.log('Hello, World!');
}
function getReminder() {
    console.log('Water the plants');
}
//Call functions with this!
greetWorld()
getReminder()
//exercise
function sayThanks() {
    console.log('Thank You for your hard work!')
}
sayThanks()
sayThanks()

function calculateVolume(length, height, width) {
    //Body!
    let volume = length * height * width
    console.log(`Volume for the rectangle: ${volume}`);
}
calculateVolume(3,4,5)

function greeting(name = 'stranger') {
    console.log(`Hello, ${name}!`);
}

greeting('Nick'); //Hi Nick!
greeting(); //Who are you stranger?
greeting('Supercalifragilisticexpialidocious person'); //Sorry, I am too busy to say your name!

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Item1: ${item1}`)
    console.log(`Item2: ${item2}`)
    console.log(`Item3: ${item3}`)
}
makeShoppingList()
makeShoppingList("apartment",'car')
makeShoppingList(undefined,null,'CHOCOLATE!!!')

function monitorCount(rows,columns) {
    return rows * columns
   
}
let numOfMonitors = monitorCount(14,2)

console.log(numOfMonitors)