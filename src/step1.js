const multiples = function (start, end) {
  let result = "";

  for (let i = start; i <= end; i++) {
    result +=
      i % 15 === 0
        ? "fizzbuzz "
        : i % 5 === 0
        ? "buzz "
        : i % 3 === 0
        ? "fizz "
        : i + " ";
  }
  return result.trim();
};

console.log(multiples(1, 20));

module.exports = multiples;
