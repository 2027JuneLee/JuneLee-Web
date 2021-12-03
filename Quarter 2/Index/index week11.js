//Conditionals! we must put () inside the condition!
if(true) {
    console.log('You are allowed to enter');
} else {
    console.log('You are not allowed to enter');
}
let x = 101;
if(x > 50) {
    console.log('A plus!');
} else {
    print('F!');;
}
//comparison operators (<,>,<=,>=,===,!==) !== is not equal to, while === means equal to. You know the rest, and so do I!
//exercise 1
let hungerlevel = 7;
if (hungerlevel > 7) {
    console.log("Time to eat!");
} else {
    console.log("We can eat later!");
}
//logical operators (and operator && or operator || Not operator is !)
let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log("time to sleep");
} else {
    console.log("not be time yet");
}
//Other than these, all values are Truthy. Falsy values are: let x = "";, let x = '';, let x = 0;, let x = null;, and let x;
//CONST MUST ALWAYS HAVE A VALUE!
let wordCount = 1;
wordCount = 0;
console.log(wordCount)
let favortiePhrase = '';
favortiePhrase = 'a penny is a penny';
let username = '';
let defaultName = username || 'Stranger';
console.log(defaultName);
let tool = ''
let writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword`);
let movieTime = true
//if/else statement
if(movieTime) {
    console.log('lets watch movies!');
} else {
    console.log('study!');
}
movieTime = false;
//refactor, ternary operator
movieTime ? console.log('lets watch movies!') : console.log('study!');
let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let stoplight = 'green'

if(stoplight === 'red') {
    console.log('STOP!')
} else if(stoplight === 'yellow') {
    console.log('SLOW DOWN!')
} else if(stoplight === 'green') {
    console.log('GO!')
} else {
    console.log('ERROR (404007)!')
}

let season = 'summer';
if(season === 'spring') {
    console.log('spring');
} else if(season === 'summer') {
    console.log('summer');
} else if(season === 'fall') {
    console.log('fall');
} else if(season === 'winter') {
    console.log('winter')
} else {
    console.log('ERROR (404007)!')
}
// the swtich keyword! easier (?) stuff! break with ;, case with :!
let food = 'tomato';

switch(food) {
    case 'papaya':
        console.log('papayas are $300.99');
        break;
    case 'lime':
        console.log('limes are $14.99');
        break;
    case 'tomato':
        console.log('tomatoes are $0.49');
        break;
    default:
        console.log('ERROR 400186: INVALID ITEM')
        break;
}

let GPA = 'A'
let score;

switch(GPA) {
    case 'A':
        score = 100;
        break;
    case 'B':
        score = 90;
        break;
    case 'C':
        score = 80;
        break;
    default:
        score = 60;
        break;
}
console.log(score)
