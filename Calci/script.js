// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (!isNaN(value) || value === '.') {
      // Handle numbers and decimal points
      currentInput += value;
      display.textContent = currentInput;
    } else if (value === 'C') {
      // Clear the display
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '0';
    } else if (value === '=') {
      // Perform calculation
      if (currentInput && previousInput && operator) {
        currentInput = String(calculate(Number(previousInput), Number(currentInput), operator));
        display.textContent = currentInput;
        previousInput = '';
        operator = '';
      }
    } else {
      // Handle operators
      if (currentInput) {
        if (previousInput) {
          previousInput = String(calculate(Number(previousInput), Number(currentInput), operator));
        } else {
          previousInput = currentInput;
        }
        operator = value;
        currentInput = '';
      }
    }
  });
});

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'Error';
    default:
      return 0;
  }
}
