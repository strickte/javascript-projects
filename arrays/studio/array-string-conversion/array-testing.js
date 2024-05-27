let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];


//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.

	let check = strings[0];

	if (check.includes(',')) {
		let output = check.split(',');
		output.reverse();
		return output.join(',');
	}
	//TODO: 2. write the code required for this step

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	
}
console.log(reverseCommas());
//3)
function semiDash() {
	let check = strings[1];
	if (check.includes(';')){
		let output = check.split(';');
		output.sort();
		return output.join('-');
	}
	

//TODO: write the code required for this step

	return check;
	
}
console.log(semiDash());

//4)
function reverseSpaces() {
	let check = strings[2];
	if (check.includes(' ')){
		let output = check.split(' ');
		output.sort().reverse();
		return output.join(' ');
	}
	
  //TODO: write the code required for this step

	return check;
}
console.log(reverseSpaces())

//5)
function commaSpace() {
	let check = strings[3];
	if (check.includes(', ')){
		let output = check.split(', ');

		return output.reverse().join(',');
	}
	
	//TODO: write the code required for this step
  
	return check;
}
console.log(commaSpace());

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
