// launchcode.test.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
  test("Should return organization: 'nonprofit'", function () {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("Should return executiveDirector: 'Jeff'", function () {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("Should return percentageCoolEmployees: 100", function () {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("Should return programsOffered: ['Web Development', 'Data Analysis', 'Liftoff']", function () {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });
});
describe("Should have a method called launchOutput, which", function () {
  test("When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!", function () {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });
  test("When passed a number that is ONLY divisible by 3, launchOutput() returns 'Code!", function () {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });
  test("When passed a number that is ONLY divisible by 5, launchOutput() returns 'Rocks!", function () {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });
  test("When passed a number that is divisible by 2 AND 3, launchOutput() returns 'LaunchCode!", function () {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });
  test("When passed a number that is divisible by 3 AND 5, launchOutput() returns 'Code Rocks!", function () {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });
  test("When passed a number that is divisible by 2 AND 5, launchOutput() returns 'Launch Rocks! (CRASH!!!)", function () {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!)");
  });
  test("When passed a number that is divisible by 2, 3, AND 5, launchOutput() returns 'LaunchCode Rocks!", function () {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });
});
