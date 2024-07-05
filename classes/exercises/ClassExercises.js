// Define your Book class here:
class Book {
  constructor(
    title,
    author,
    copyrightDate,
    iSBN,
    numPages,
    numCheckOuts,
    discarded
  ) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.iSBN = iSBN;
    this.numPages = numPages;
    this.numCheckOuts = numCheckOuts;
    this.discarded = discarded;
  }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    iSBN,
    numPages,
    numCheckOuts,
    discarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      iSBN,
      numPages,
      numCheckOuts,
      discarded
    );
  }
  dispose(currentYear) {
    if (currentYear - this.copyrightDate > 5) {
      this.discarded = "Yes";
    }
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    iSBN,
    numPages,
    numCheckOuts,
    discarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      iSBN,
      numPages,
      numCheckOuts,
      discarded
    );
  }
  dispose() {
    if (this.numCheckOuts > 100) {
      this.discarded = "Yes";
    }
  }
}

// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  "1111111111111",
  432,
  32,
  "No"
);

let topSecretShuttleBuildingManual = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  "0000000000000",
  1147,
  1,
  "No"
);

// Code exercises 4 & 5 here:

topSecretShuttleBuildingManual.dispose(2024);
console.log(topSecretShuttleBuildingManual.discarded);

prideAndPrejudice.numCheckOuts = prideAndPrejudice.numCheckOuts + 5;
console.log(prideAndPrejudice.numCheckOuts);
console.log(prideAndPrejudice.discarded);
