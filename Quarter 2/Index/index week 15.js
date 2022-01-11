console.log("For loops and reverse for loops")
for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
}
for (let counter = 3; counter >= 0; counter--)
{
    console.log(counter);
}
console.log('exercise 1a')
for (let counter = 5; counter <= 10; counter++)
{
    console.log(counter);
}
console.log('exercise 1b')
for (let counter = 100; counter >= 0; counter--)
{
    console.log(counter)
}
console.log("Looping through arrays (ft. We Bare Bears")
const webarebears = ["Grizzly Bear","Polar Bear","Panda"]
for (let i = 0; i < webarebears.length; i ++) {
    console.log(webarebears[i])
}
console.log('exercise 2a')
const alphabets = ['a','b','c','d','e','f']
for (let i = 0; i < alphabets.length; i++) {
    console.log(alphabets[i])
}
console.log('exercise 2b')
console.log('we can see which number is divisible by 1 by chainging  % 2 into % 1. Applys to any number. Change === to !== to make it reverse!')
const numbers = [1,2,3,4,5,6,7,8]
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}
console.log('exercise 2c')
const numbers2 = [1,5,-1,4,2,9,10]
for (let i = 0; i < numbers2.length; i++){
    if(numbers2[i] > 4) {
        console.log(numbers2[i])
    }
}
console.log('nested loops')
const myArray = [6,19,20];
const yourArray = [19,81,2];
for (let i = 0; i < myArray.length; i++){
    for (let j = 0; j < yourArray.length; j++){
        if (myArray[i] === yourArray[j]) {
            console.log('Both loops have the number: ' + yourArray[j])
        }
    }
}

console.log('Nested Loops')

const arr = [[1,2,3],[4,5,6],[7,8,9]]

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[0].length; j++) {
        console.log(arr[i][j])
    }
}
console.log('exercise 3a')
const list = [[11,22,33],[44,55,66],[77,88,99]]
for(let i = 0; i < list.length; i++) {
    for(let j = 0; j < list[0].length; j++) {
        if(list[i][j] % 6 === 0) {
            console.log(list[i][j])
        }
    }
}
console.log('exercise 3b')
let bobsFollowers = ['Joe','Marta','Sam','Erin']
let tinasFollowers = ['Sam','Marta','Elle']
let mutualFollowers = []
let mutual = 0
for(let i = 0; i < bobsFollowers.length; i++) {
    for(let j = 0; j <tinasFollowers.length; j++){
 if(bobsFollowers[i]===tinasFollowers[j]) {
    mutualFollowers.push(bobsFollowers[i])} }}
console.log(bobsFollowers,tinasFollowers,mutualFollowers)
console.log('while loops, the last jedi (i mean loop)/ we ue the while thing instead of for. the format is different.')
console.log('exercise 4a')
const cards = ['diamond','spade','heart','club']
let currentCard;
let i = 0
while(currentCard !== 'spade' && i < cards.length) {
    currentCard = cards[i]
    console.log(currentCard)
    i++
}
console.log('breaks')
console.log('exercise 5a')
const characters = ['a','b','c','d','e','f','g']
const vowels = ['p','b','j','z','u']
i = 0
while(i < characters.length) {
    if(characters[i] === "a" || characters[i] === "e" || characters[i] === "i" || characters[i] === "o" || characters[i] === "u") {
        break
    } else {
        console.log(characters[i])
        i++
    }
}
console.log('When I find myself in times of trouble, mother mary comes to me, speaking words of wisdom, let it be. Let it be, let it be, let it be, oh let it beee! Whisper words of wisdom, let it be.')