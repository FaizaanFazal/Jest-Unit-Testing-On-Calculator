//calculator program for testing
import promptSync from 'prompt-sync';
const prompt = promptSync();


// defining functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Operations
export const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      if (num2 !== 0) {
        return divide(num1, num2);
      } else {
        return "error division by zero";
      }
    default:
      return "Error: Invalid operator";
  }
};

// Inputs from user
const num1 = parseFloat(prompt("Enter the first number:"));
const operator = prompt("Enter an operator (+, -, *, /):");
const num2 = parseFloat(prompt("Enter the second number:"));

// Result
const result = calculate(operator, num1, num2);
console.log(`Result: ${result}`);

