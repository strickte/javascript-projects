let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function (num) {
    let parts = {
      2: "Launch",
      3: "Code",
      5: "Rocks",
    };
    let result = "";
    for (let item in parts) {
      if (num % item === 0) {
        if (item == 5 && result.length !== 0) {
          result += " ";
        }
        result += parts[item];
      }
    }
    if (result === "Launch Rocks") {
      return result + "! (CRASH!!!)";
    } else return result + "!";
  },
};

module.exports = launchcode;
