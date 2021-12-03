//Training
// The scope of `random` is too loose

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
  let days = 0
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight
name = 'June'
const logEvent = (event) => {
  console.log(`${name}'s probably fantastic event is: ${event}`);
};

const logTime = (days) => {
  console.log(`${name}'s time to train is: ${days} (maybe) wonderful days`);
};

//Fix from here!

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime
logEvent(event);
logTime(days);