//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
const element1 = ['hydrogen', 'H', 1.008];
const element2 = ['helium', 'He', 4.003];
const element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
const table = [element1, element2, element26];
console.log(table);
//!!!I do not understand what the .push is meant to do here.
//^^^!!!^^^   ^^^!!!^^^

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1], table[1][1]);
//It is the difference between all of Array 1 (element2) and Array 1, Index 1.

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2], table[1][0], table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
const element47 = ['silver', 'Ag', 107.87];
const transitionalMetals = [element26, element47];
const nonMetals = [element1];
const nobleGases = [element2];
const water = ['H2O']
const oxygenMolecule = ['O2']
const chemicalCompounds = [water, oxygenMolecule]
const buildingBlocksOfChemistry = [transitionalMetals, nobleGases, nonMetals, chemicalCompounds];
console.log(buildingBlocksOfChemistry[0]);
console.log(buildingBlocksOfChemistry[0][0]);
console.log(buildingBlocksOfChemistry[0][0][0]);
