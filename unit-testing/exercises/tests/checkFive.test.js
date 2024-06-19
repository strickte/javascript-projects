const checkFive = require("../checkFive.js");

describe("checkFive", function () {
  test("Returns 'num is less than 5' when num < 5.", function () {
    let output = checkFive(2);
    expect(output).toEqual("2 is less than 5.");
  });
  test("Returns 'num is more than 5' when num > 5.", function () {
    let output = checkFive(7);
    expect(output).toEqual("7 is greater than 5.");
  });
  test("Returns 'num is equal to 5' when num === 5.", function () {
    let output = checkFive(5);
    expect(output).toEqual("5 is equal to 5.");
  });
});
