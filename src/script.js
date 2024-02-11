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

//////////////////////////////////////
const inputMin = document.getElementById("form_input--min");
const inputMax = document.getElementById("form_input--max");
const btnGenerate = document.getElementById("btn__generate");
const outputResult = document.getElementById("output__result");
const statisticResultFizz = document.getElementById("statistics__result--fizz");
const statisticResultBuzz = document.getElementById("statistics__result--buzz");
const statisticResultFizzbuzz = document.getElementById(
  "statistics__result--fizzbuzz"
);
const statisticResultInteger = document.getElementById(
  "statistics__result--integer"
);

const displayErrorMessage = function (element, message) {
  element.textContent = message;
};

const clearOutputs = () => {
  outputResult.textContent = "";
  statisticResultFizz.textContent = "";
  statisticResultBuzz.textContent = "";
  statisticResultFizzbuzz.textContent = "";
  statisticResultInteger.textContent = "";
};

const resetCounts = () => {
  fizzCount = 0;
  buzzCount = 0;
  fizzbuzzCount = 0;
  integersCount = 0;
};

const handleGenerateBtn = () => {
  let hasError = false;

  // Storing input values
  const valueMin = inputMin.value;
  const valueMax = inputMax.value;
  console.log(valueMin);
  console.log(valueMax);

  // Check if there is an input, if it is positive and integer
  if (!valueMin || valueMin < 1 || valueMin % 1 !== 0) {
    displayErrorMessage(
      document.querySelector(".error_message--min"),
      "⛔️ Only positive integers"
    );
    inputMin.value = "";
    clearOutputs();
    hasError = true;
  } else {
    displayErrorMessage(document.querySelector(".error_message--min"), "");
  }

  if (!valueMax || valueMax < 1 || valueMax % 1 !== 0) {
    displayErrorMessage(
      document.querySelector(".error_message--max"),
      "⛔️ Only positive integers"
    );
    inputMax.value = "";
    clearOutputs();
    hasError = true;
  } else {
    displayErrorMessage(document.querySelector(".error_message--max"), "");
  }

  if (hasError) return;

  const start = valueMin;
  const end = valueMax;

  const finalResult = multiples(start, end);
  outputResult.textContent = finalResult;
  statisticResultFizz.textContent = fizzCount;
  statisticResultBuzz.textContent = buzzCount;
  statisticResultFizzbuzz.textContent = fizzbuzzCount;
  statisticResultInteger.textContent = integersCount;
  resetCounts();
};

btnGenerate.addEventListener("click", function (e) {
  e.preventDefault();
  handleGenerateBtn();
  return false;
});
