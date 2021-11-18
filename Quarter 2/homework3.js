//Welcome to quick runner v1.0!
raceNumber = (Math.floor(Math.random() * 1000));
//it's exclusive, not inclusive!
let earlyBird = true
let runnerAge = 90
if(runnerAge >= 18 && earlyBird === true) {
    raceNumber += 1000
}

if(runnerAge >= 18 && earlyBird === true) {
    console.log(`Runner number ${raceNumber}, your race starts at 9:30 am!`)
} else if(runnerAge >= 180 && earlyBird === false) {
    console.log(`Runner number ${raceNumber}, your race starts at 11:00 am!`)
} else if(runnerAge < 18) {
    console.log(`Runner number ${raceNumber}! Your race starts at 12:30!`)
} else {
    console.log('Please register as a runner from the registration desk!')
}