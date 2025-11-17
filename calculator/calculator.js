// Calculator implementation in JavaScript using switch-case

// Importing prompt-sync for user input in Node.js
const prompt = require("prompt-sync")();

function calculator(num1, num2, operator) {
    let result = 0;

    // switch case to check the operator
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
                break;
            } else {
                return "Error: Division by zero";
            }
    }

    // return the result
    return result;
}


let num1 = Number(prompt("Enter num1:"));
let num2 = Number(prompt("Enter num2:"));
let operator = prompt("Enter operator (+, -, *, /):");

let result = calculator(num1, num2, operator);
console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);

