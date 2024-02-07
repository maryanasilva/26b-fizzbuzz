const multiples = require("../src/step1");

describe("multiples", () => {
  it("should return the correct string for a range of numbers", () => {
    const result = multiples(1, 20);
    expect(result).toBe(
      "1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz"
    );
  });
});
