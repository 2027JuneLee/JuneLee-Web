// tips section
console.log("USE CTRL + S TO SAVE YOUR CODE AND RUN IT USE CTRL + ALT + N TO RUN THE CODE!") 
console.log("DO ONE LINE COMMENT WITH //! DO /* TO START MULTI LINE COMMENT AND DO */ TO END IT!")
console.log("Do CTRL + SLASH TO MAKE CODE INTO COMMENT!")

//Intro story begins
console.log("HELLO!");
console.log("YOU: HI!");
console.log("WHAT'S YOUR NAME?");
console.log("YOU: JUNE!");
console.log("HMMM... VERY COOL!");
console.log("YOU: THANKS!");
console.log("MY NAME IS JAVASCRIPT!");
console.log("YOU: WOW!");
console.log("YOU CAN USE ME TO PROGRAM LOTS OF STUFF!");
console.log("YOU: COOL!");
console.log("WE ARE ALREADY WRITING OUR LINES WITH THE console.log(something) COMMAND!");
console.log("TRY RUNNING THE CODE.");
console.log("YOU: WOW!");

//Activity starts

//Mission 1
console.log("NOW TRY LOGGING YOUR AGE TO THE CONSOLE!");
//My age
console.log(13);
//Mission 2
console.log("GOOOOD!!! NOW TELL ME THE NUMBER OF SIBLINGS YOU HAVE!");
//# of siblings
console.log(2);
//Mission complete
console.log("WOW! YOU'VE MASTERED THE console.log FUNCTION!");
// A good comment (use slash slash)

/* comment begins (use star slash)
comment continues
comment ends here!*/

//Now I will teach you codes by commenting! I will not appear in the output!

/*There are different types of data. 
 number types support decimals or whole numbers. Any number's fine!
 strings are characters, like ABC!
 booleans are true/false! Only use small letters!
*/

//string format
console.log("Javascript");
//number format
console.log(2011);
//sentence string format double quote
console.log("A penny saved is a penny earned.");
//decimal number format
console.log(1.2);
//Arithmetic operations (+,-,*,/,%)
console.log(13+ 3.5);
console.log(2021-1969);
console.log(65/240);
console.log(0.2708*100);
//Challenge: Divide your age by the number of siblings you have, and give me the remainder of it.
console.log(13 % 2);
//tricky stuff: number format VS string format
console.log("1000"+"2");
console.log(1000+2);
//String Concatenation
console.log("Hello" + " Students");
//String Properties: .length: java has brackets but no for js
//this code tells length of code, and space counts!
console.log('abcdefg'.length);
console.log('Supercalifragilisticexpialidocious'.length);
//toUpperCase(); and toLowerCase();
console.log('supercalifragilisticexpialidocious'.toUpperCase());
console.log('SUPERCALIFRAGILISTICEXPIALIDOCIOUS'.toLowerCase());
//Does letter starts with J? We can filter friends with this, and find June more easily. Upper and lower case counts!
console.log('June'.startsWith("J"));
console.log('june'.startsWith("J"));
console.log('ice cream'.startsWith("J"));
//Final exercises
console.log('apple'.toUpperCase());
console.log(' Hello World'.startsWith(" "));
//Math stuff (Math.)
//Random choose random number, and multiply by a number to make the max that number!
console.log(Math.random());
console.log(Math.random() * 100);
//floor is just rounding down.
//Chooses a whole number between 0 to 49
console.log(Math.floor(Math.random() * 49));
//exercise
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.random() * 10) + 1;
//Math.ceil is just rounding up
console.log(Math.ceil(1.6) * 2);
console.log(Math.ceil(1.6 * 2) );
//Variables (you do let variable = something at first, then just do variable = something when you want to change it.)
//if you make variable nothing, its just unefined.
let Aplus = false
console.log(Aplus);
Aplus = true
console.log(Aplus);
//Const (same as const, except that it cannot get reassigned. Fix the value wisely.)
const pie = 3.14
//Mathamatical Assignment Operators
let x = 4;
x = x + 1
console.log(x);
let y = 6
y += 1;
console.log(y);
//exercise
let levelUp = 10;
levelUp += 5;
console.log(levelUp);
levelUp -= 100;
console.log(levelUp);
levelUp *= 11;
console.log(levelUp);
levelUp %= 2;
console.log(levelUp);
console.log('I now have 120 lines of code!')    
let a = 10;
a ++;
console.log(a)
//We are gonna change the value of the two with increment, so we must not use const, only use let!
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar ++;
lostDollar --;
console.log(lostDollar - gainedDollar);

let myPet = 'Triceratops';
console.log('I have a pet ' + myPet + '.');

let favoriteAnimal = 'Raccoon';
console.log('My favorite animal: ' + favoriteAnimal);

/*Amazing answer
let favoriteAnimal = "Dog";
const message = "My favorite animal: " + favoriteAnimal;
console.log(message)
*/

myPet = 'Unicorn';

console.log(`I own a pet ${myPet}.`);

/* 
Assign 2 variables, use literals to put them into one simple format.
*/
const myName = 'June';
let myCity = 'Seoul';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

//Typeof operator

let unknown1 = 'foo'
console.log(typeof unlnown1)

let unknown1 = '12'
console.log(typeof unlnown1)

let unknown1 = asdgf
console.log(typeof unlnown1)