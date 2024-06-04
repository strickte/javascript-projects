function randomSelection(arr){
  let randomWords = [];
  for (i = 0; i < 2; i++) {
   let index = Math.floor(Math.random()*arr.length);
    randomWords.push(arr[index]);
  }
   return randomWords;
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 //console.log(randomSelection(happiness));
//  for (i=0; i < 3; i++){
//    console.log(randomSelection(happiness));
//  }
//  for (i=0; i < 3; i++){
//   console.log(randomSelection(happiness));
// }

let comboArr = [happiness, words];
function selectRandomArr(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
function selectRandomArrAndWords(arr) {
  let randomArr = selectRandomArr(arr);
  return randomSelection(randomArr);
}

//console.log(selectRandomArrAndWords(comboArr));
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
 const oneRandomItemEachArr = (arr) => {
  let oneItmePerArr = [];
  for (i = 0; i < arr.length; i++) {
    let index = Math.floor(Math.random() * arr[i].length);
    oneItmePerArr.push(arr[i][index]);
  } return oneItmePerArr;
 }
 console.log(oneRandomItemEachArr(comboArr));