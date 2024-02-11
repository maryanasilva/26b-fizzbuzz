let fizzCount = 0;
let buzzCount = 0;
let fizzbuzzCount = 0;
let integersCount = 0;

const findMultiples = (start, end) => {
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

const displayErrorMessage = (element, message) => {
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

const validateInputs = (input, errorMessage) => {
  if (!input || input < 1 || input % 1 !== 0) {
    displayErrorMessage(errorMessage, "⛔️ Only positive integers");
    return false;
  }
  displayErrorMessage(errorMessage, "");
  return true;
};

// Click handler for the generate button
const handleGenerateBtn = () => {
  const valueMin = inputMin.value;
  const valueMax = inputMax.value;

  const minInputValid = validateInputs(
    valueMin,
    document.querySelector(".error_message--min")
  );

  const maxInputValid = validateInputs(
    valueMax,
    document.querySelector(".error_message--max")
  );

  if (!minInputValid || !maxInputValid) {
    clearOutputs();
    return;
  }

  const finalResult = findMultiples(valueMin, valueMax);
  outputResult.textContent = finalResult;
  statisticResultFizz.textContent = fizzCount;
  statisticResultBuzz.textContent = buzzCount;
  statisticResultFizzbuzz.textContent = fizzbuzzCount;
  statisticResultInteger.textContent = integersCount;
  resetCounts();
};

btnGenerate.addEventListener("click", (e) => {
  e.preventDefault();
  handleGenerateBtn();
});
