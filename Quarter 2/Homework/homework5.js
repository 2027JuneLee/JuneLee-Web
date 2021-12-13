let secretMessage = [
    "Learning",
    "is",
    "not",
    "about",
    "what",
    "you",
    "get",
    "easily",
    "the",
    "first",
    "time,",
    "it",
    "is",
    "about",
    "what",
    "you",
    "can",
    "figure",
    "out.",
    "-2015,",
    "Chris",
    "Pine,",
    "Learn",
    "JavaScript",
  ];

secretMessage.pop()
console.log(secretMessage.length)
secretMessage.push('to','program')
secretMessage[7] = 'right'
secretMessage.shift()
secretMessage.unshift('Programming','or','Coding')
const slicedSecretMessage = secretMessage.slice(24,27)
console.log(slicedSecretMessage)
let lastElement = slicedSecretMessage.length-1
console.log(lastElement)
console.log(slicedSecretMessage[2].length)
if(slicedSecretMessage[2].length>2) {
    slicedSecretMessage[2] = 'UPDATED'
} else {
    slicedSecretMessage.pop()
}
console.log(slicedSecretMessage)
console.log(secretMessage)