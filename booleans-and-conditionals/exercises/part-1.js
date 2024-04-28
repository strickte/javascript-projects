// Declare and initialize the variables for exercise 1 here:

// BEFORE running the code, predict what will be printed to the console by the following statements:


//1. Declare and initialize

const engineIndicatorLight = !'red blinking';
const spaceSuitsOn = true;
const shuttleCabinReady = true;
const crewStatus = spaceSuitsOn && shuttleCabinReady;
const computerStatusCode = 200;
const shuttleSpeed = 15000;

//2. 

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

//3.

if (crewStatus) {
   console.log('Crew Ready');
}  else {
    console.log('Crew Not Ready');
}

if (computerStatusCode === 200) {
   console.log('Please stand by. Computer is rebooting.');
} else if (computerStatusCode === 400) {
   console.log('Success! Computer online.');
} else {
   console.log('ALERT: Computer offline!');
}

//4. Predict: No, they will not have the same result as each other
//as the second line of code is !== and logical OR
//and computerStatusCode and 200 should still equal.

if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}

//I was wrong, going to need to dissect further.
//I'm thinking it's that !crewStatus can !== 200 because of ||.

//5. Shuttle's fuel status

const fuelLevel = 18000;
const engineTemperature = 2500;

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === 'red blinking') {
   console.log('ENGINE FAILURE IMMINENT!');
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
   console.log('Full tank. Engines good.'); 
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
   console.log('Fuel level above 50%. Engines good.');
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
   console('Fuel level above 25%. Engines good.');
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
   console.log('Check fuel level. Engines running hot.');
} else {
   console.log('Fuel and engine status pending...');
}

//6. Command Override

const commandOverride = false;

if (fuelLevel > 20000 && engineIndicatorLight === !'blinking red' || commandOverride === true) {
   console.log('Cleared to Launch!')
} else {
   console.log('Launch scrubbed!')
}