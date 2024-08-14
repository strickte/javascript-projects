//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    return this.scores.push(newScore);
  }
  average() {
    let sumTotal = 0;
    for (let index = 0; index < this.scores.length; index++) {
      sumTotal += this.scores[index];
    }
    let average = Math.round((sumTotal / this.scores.length) * 10) / 10;
    return average;
  }
  status() {
    if (this.average() >= 90) {
      return "Accepted";
    }
    if (this.average() >= 80) {
      return "Reserve";
    }
    if (this.average() >= 70) {
      return "Probationary";
    }
    if (this.average() < 70) {
      return "Rejected";
    }
  }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
//console.log(bubbaBear);

let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
// console.log(merryMaltese);

let gladGator = new CrewCandidate("Glad Gator", 225, [75, 72, 62]);
// console.log(gladGator)
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bubbaBear.addScore(83);
//console.log(bubbaBear.scores);
//console.log(merryMaltese.average());
//console.log(`${this.name}`)

// console.log(
//   `${
//     bubbaBear.name
//   } earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`
// );
// console.log(
//   `${
//     merryMaltese.name
//   } earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`
// );
// console.log(
//   `${
//     gladGator.name
//   } earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`
// );

let candidates = [bubbaBear, merryMaltese, gladGator];
for (i = 0; i < candidates.length; i++) {
  console.log(
    `${candidates[i].name} earned an average test score of ${candidates[
      i
    ].average()}% and has a status of ${candidates[i].status()}.`
  );
}
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let testCount = 0;
while (gladGator.status() !== "Accepted") {
  gladGator.addScore(100);
  testCount++;
}
console.log(`It will take Glad Gator ${testCount} tests to reach "Accepted".`);
