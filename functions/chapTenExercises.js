//makeLine(size) 

// function makeLine(size) {
//     let line = '';
//     for (let i = 0; i < size; i++) {
//         line += '#';
//     }
//     return line;
// }
// console.log(makeLine(5));

//makeSquare(size)

// function makeSquare(size) {
//     let line = '';
//     let square = '';
//     for (let i = 0; i < size; i++) {
//         line += '#';
//     }
//     for (let i = 0; i < size; i++) {
//         square += '\n' + line;
//     }
//     return square;
// }

//re-made makeSquare(size)

// function makeSquare(size) {
//     let square = '';
//     for (let i = 0; i < size; i++) {
//         square = (makeRectangle(size,size));
//     }
//     return square;
// }


// console.log(makeSquare(5));

//makeRectangle(width,height)

// function makeRectangle(width,height) {
//     let rectangle = '';
//     for (let i = 0; i <height; i++) {
//         rectangle += (makeLine(width) + '\n')
//     }
//     return rectangle.slice(0, -1);
// }
// console.log(makeRectangle(5,3));

//makeDownwardStairs(height)

// function makeDownwardStairs(height) {
//     let stairs = '';
//     for (let i = 0; i <height; i++) {
//          stairs += makeLine(i+1) + '\n';
//     }
//    return stairs.slice(0,-1);
// }

// console.log(makeDownwardStairs(5));

//makeSpaceLine(numSpaces, numChars)

function makeSpaceLine(numSpaces, numChars) {
    let spaces = '';
    let chars = '';
    for (let i = 0; i < numSpaces; i++) {
        spaces += ' '; 
    } 
    for (let i = 0; i < numChars; i++) {
        chars += '#';
    }
    let spaceLine = spaces + chars + spaces;
    return spaceLine;
}   

// console.log(makeSpaceLine(3, 5));

//makeIsoscelesTriangle(height)

function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = '';
    for (i = 0; i < height; i ++) {
        isoscelesTriangle += (makeSpaceLine(height - i -1, 2 * i +1) + '\n');
    }
    return isoscelesTriangle.slice(0,-1);
}

// console.log(makeIsoscelesTriangle(5));

//makeDiamond(height)

function makeDiamond(height) {
    let diamond = '';
    triangle = makeIsoscelesTriangle(height);
    diamond = triangle + '\n' + triangle.split('').reverse().join('');
    return diamond;
}
console.log(makeDiamond(5));