//Question 1
function add(one,two) {
    return one + 2
} 
console.log(add(3,2))
//Question 2
function AOC(radius) {
    return 3.14 * radius * radius
}
console.log(AOC(10))
console.log(AOC(4))
//Question 3
function lessThan(one,two) {
    if (one + two < 100) {
        return true
    } else {
        return false
    }
}
console.log(lessThan(212,15))
console.log(lessThan(22,15))
//Question4
function leapYear(year) {
    if( year % 4 === 0) {
        return true
    } else {
        return false
    }
}
console.log(leapYear(2020))
console.log(leapYear(2021))
// Question 5
// Create a function that takes two arguments as integers
// Return true if one of them is 10 or their sum is 10

// Examples:
// ten(9, 10 ) -> true
// ten(9, 9) -> false
// tem(1, 10) -> true
function tem(num,numm) {
    if(num + numm === 10) {
        return true
    } else if(num === 10) {
        return true
    } else if(numm === 10) {
        return true
    } else {
        return false
    }
}
console.log(tem(9,10))
console.log(tem(9,9))
console.log(tem(9,1))