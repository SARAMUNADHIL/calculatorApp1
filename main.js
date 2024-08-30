let num1 = "";
let num2 = "";
let operator = "";
let result = null;
let isOperatorSelected = false;

const numbers = document.querySelectorAll(".num");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const clear = document.getElementById("clear");
const clearOne = document.getElementById("clear-one");
const equal = document.getElementById("equal");
const display = document.getElementById("display");

numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    if (!isOperatorSelected) {
      num1 += event.target.innerText;
      display.innerText = `${num1} ${operator} ${num2}`;
    } else {
      num2 += event.target.innerText;
      display.innerText = `${num1} ${operator} ${num2}`;
    }
  });
});

function setOperator(op) {
  isOperatorSelected = true;
  operator = op;
  display.innerText = `${num1} ${operator} ${num2}`;
}

addition.addEventListener("click", function () {
  setOperator("+");
});

subtraction.addEventListener("click", function () {
  setOperator("-");
});

multiplication.addEventListener("click", function () {
  setOperator("*");
});

division.addEventListener("click", function () {
  setOperator("/");
});

function clearDisplay() {
  num1 = "";
  num2 = "";
  operator = "";
  isOperatorSelected = false;
  display.innerText = "";
}

clear.addEventListener("click", clearDisplay);

equal.addEventListener("click", function () {
  if (num1 && num2 && operator) {
    switch (operator) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = "Error";
    }
    display.innerText = result;
    // Reset for new calculation
    num1 = result;
    num2 = "";
    operator = "";
    isOperatorSelected = false;
  } else {
    display.innerText = "Error";
  }
});

clearOne.addEventListener("click", function () {
  if (num2) {
    num2 = num2.slice(0, -1);
  } else if (operator) {
    operator = "";
  } else if (num1) {
    num1 = num1.slice(0, -1);
  }
  display.innerText = `${num1} ${operator} ${num2}`;
});
