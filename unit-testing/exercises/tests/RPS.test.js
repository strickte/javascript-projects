const testWhoWon = require("../RPS.js");

describe("whoWon", function () {
  test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
    let output = testWhoWon.whoWon("rock", "paper");
    expect(output).toBe("Player 2 wins!");
  });

  test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function () {
    let output = testWhoWon.whoWon("paper", "scissors");
    expect(output).toBe("Player 2 wins!");
  });
  test("returns 'TIE!' if P1 === P2", function () {
    let output = testWhoWon.whoWon("rock", "rock");
    expect(output).toBe("TIE!");
  });
  test("returns 'Player 2 win' if P1 = scissors and P2 = rock", function () {
    let output = testWhoWon.whoWon("scissors", "rock");
    expect(output).toBe("Player 2 wins!");
  });
  test("Checks for valid data entry", function () {
    let output = testWhoWon.whoWon("rock ", "rock");
    expect(output).toBe("Please enter 'rock', 'paper', or 'scissors'.");
  });
});
