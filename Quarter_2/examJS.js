// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 5; j++) {
//         console.log("*")
//     }
// }
// function function1(arr,string) {
//     let count = 0
//     let i = 0
//     let len = arr.length-1
//     while(i < len) {
//         i++
//         if(arr[i].startsWith(string)) {
//             count++
//         }
//     }
//     console.log(count)
// }
// arr = ['g','g','wig','g','g','hello?']
// function1(arr,"g")
// function MCF2(arr2,num){ 
//     let i = 0;
//     let j = 0;
//     while(i < arr2.length) {
//         i++
//         j++
//         if(arr2[i][j] == num) {
//             break
//         }
//     }
// }
// function MCF3 (arr3,num) {
//     let i = 0
//     let count = 0
//     while(i < arr3.length) {
//         i++
//         if(arr3[i].length > num) {
//             count++
//         }
//     }
// }
let arr = [1,3,4,5,6,8,9,2,3,0]
function MCF4(arr4){
    let i = 0
    while(i<arr4.length) {
        i++
        if(arr4[i] % 2 !== 0) {
            arr4[i]++ }
        }
    }