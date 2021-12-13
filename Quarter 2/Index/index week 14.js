//Array is same as python list; index is same (starting from 0 to whatever).
//The const array values are mutable. The array's name cannot change however.
const hobbies = ['Studying','Talking','Gaming']
console.log(hobbies)
console.log(hobbies[0])
console.log(hobbies[2]) 
console.log(hobbies[1])
hobbies[1] = 'Exercising'
console.log(hobbies[1])

let seasons = ['Winter','Spring','Summer','Fall']
console.log(seasons)
seasons[3] = 'Autumn'
console.log(seasons)

let condiments = ['Ketchup','Mustard','Soy Sauce','Sriacha']
const utensils = ['Fork','Knife','Chopsticks','Spork']
//Exercise
condiments[0] = 'Mayo'
//It is possible
condiments = ['Mayo']
//It is possible
utensils[0] = 'Teaspoon'
//It is possible
// utensils = ['Teaspoon']
//It is not possible (TypeError)

//.length property (The is a built-in property like a birth certificate)
console.log(hobbies.length)
//.push() (built-in method, which means that we use parameters) It will add items
const items = ['1','2','3']
items.push('4','5')
console.log(items)
subjects = []
subjects.push('Enrichment Toffel and Algebra (next week = last week)',"Web Development",'Python','Life Science','World Geography','Introduction to Mandarin','English 7','Writing 7','Algebra I','Track 2','G7')
console.log(subjects)
console.log(subjects.length)
console.log(subjects)
//.pop(): Removes last item from list, and returns the value of the removed element if you do console.log(removed)
const itemsNew = ['1','2','3']
let removed = itemsNew.pop()
console.log(itemsNew)
console.log(removed)
removed = subjects.pop()
console.log(removed)
console.log(subjects.length)
///shift(): Removes the first element, which is the opposite of pop()
dropped = subjects.shift()
console.log('Shift')
console.log(dropped)
console.log(subjects)
//.unshift()
const grocery = ['banana','apple']
let newLength = grocery.unshift('orange','kiwi')
console.log(newLength.length)
console.log(newLength)
newLength = subjects.unshift('Biology','Calculus','PE')
console.log(subjects)
//.slice() only include 
const randomAlphabets = ['a','b','c','d','f']
const newArray = randomAlphabets.slice(1,3)
console.log(newArray)
const newArray2 = randomAlphabets.slice(0,1)
console.log(newArray2)
const newArray3 = randomAlphabets.slice(3,5)
console.log(newArray3)
const nums = [1,2,3,4,5,6,7,8,9,10]
const newNums = nums.slice(4,10)//We can do only 4
console.log(newNums)
const newNums2 = nums.slice(nums.length-1)//also we can do 9,10 and 9!
console.log(newNums2)
const newNums3 = nums.slice(0,2)
console.log(newNums3)
//GROCERY SLICE!
const groceryy = ['orange','bananas','kiwis']
const part1 = groceryy.slice('apple','tomatoes')
console.log(part1)
//.indexOf()
const groceryList = [1,2,3,4,'Bananas',true,false,0.9]
console.log(groceryList.indexOf(0))
let arr = ['a','b','a','c','a','d']
const indexofA = arr.indexOf("a")
console.log(indexofA)
console.log(arr.indexOf("z"))
let zindex = arr.indexOf('z')
if(zindex!==-1) {
    arr[zindex]='FOUND'
    console.log('Z FOUND, UPDATING LIST')
} else {
    console.log('Z NOT FOUND IN ARRAY')
}
/*To June Lee (Adress UNDEFINED)
/.push()
/.pop()
/.shift()
/
*/
const concept = ['arrays','can','be','mutated']
const concept2 = ['X']
function changeArr(arrays){
    arrays[arrays.length-1]='MUTATED'
    return arrays
}
console.log(changeArr(concept))
console.log(changeArr(concept2))
//Nested Arrays
const nestedArr = [[1],[2,3]]
console.log(nestedArr[1])
console.log(nestedArr[[1],[0]])
//numberClusters
let numberClusters = [[1,2],[3,4],[5,6]]
console.log("numberClusters")
console.log(numberClusters[0][1])
numberClusters[2][1] = -6
console.log(numberClusters[1].length)
console.log(part1)