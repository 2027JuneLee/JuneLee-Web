//Question 1
function add(one,two) {
    return one + two
} 
console.log(add(3,2))
console.log(add(-3,-6))
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