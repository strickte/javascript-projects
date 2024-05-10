const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
// const shortStr = str.slice(0,3);
// // console.log(shortStr);
// const longStr = str.slice(3);
// // console.log(longStr);
// const newStr =(longStr + shortStr);
// console.log(newStr);


//Use a template literal to print the original and modified string in a descriptive phrase.
// console.log(`The original string reads "${str}," and the new string reads "${newStr}."`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
const candidateAnswer = input.question('How many letters at the front of the string will be relocated?: ')

//Added the line below from #3
if (candidateAnswer > 9 || candidateAnswer < 1) {
    console.log("Please try again. Enter a number between 1 and 9.");
}

// console.log(candidateAnswer);
else {
const shortStr = str.slice(0,candidateAnswer);
const longStr = str.slice(candidateAnswer);
const newStr =(longStr + shortStr);
console.log(`The original string reads "${str}," and the new string reads "${newStr}."`);
}


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
// if (candidateAnswer > 9) {
//     console.log("Please try again. Enter a number between 1 and 9.");
// }