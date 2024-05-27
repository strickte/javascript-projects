let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food.split(',').sort();
equipment.split(',').sort();
pets.split(',').sort();
sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold  = [food,equipment,pets,sleepAids];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');

const cabinetChoice = input.question('Please select a cabinet: ');
const cabinetNumber = cargoHold[cabinetChoice - 1];
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
//console.log(`Cabinet ${cabinetChoice} contains: ${cabinetNumber}`);

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
const itemQuery = input.question('What item are you looking for?: ')
if (cabinetNumber.includes(itemQuery) === true){
    console.log(`Cabinet ${cabinetChoice} does contain ${itemQuery}.`);
}  else {
    console.log(`Cabinet ${cabinetChoice} does not include ${itemQuery}.`)
}