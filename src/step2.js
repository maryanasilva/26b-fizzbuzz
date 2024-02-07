let fizzCount = 0;
let buzzCount = 0;
let fizzbuzzCount = 0;
let integersCount = 0;

const multiples = (start, end) => {
  let result = "";

  for (let i = start; i <= end; i++) {
    if (i % 15 === 0) {
      result += "fizzbuzz ";
      fizzbuzzCount++;
    } else if (i % 5 === 0) {
      result += "buzz ";
      buzzCount++;
    } else if (i % 3 === 0) {
      result += "fizz ";
      fizzCount++;
    } else {
      result += i + " ";
      integersCount++;
    }
  }
  return result.trim();
};

const finalResult = multiples(1, 20);
console.log(
  finalResult +
    " " +
    `fizz: ${fizzCount} buzz: ${buzzCount} fizzbuzz: ${fizzbuzzCount} integer: ${integersCount}`
);

module.exports = {
  multiples,
  fizzCount,
  buzzCount,
  fizzbuzzCount,
  integersCount,
};
