// Defining Variables
let firstNum = '';
let secondNum = '';
let operator = null;

// Selecting / Creating DOM elements
const calcDisplayElement = document.querySelector('.calc-display');
const calcNumbersButtons = document.querySelector('.calc-num-btns');
const calcOperationButtons = document.querySelector('.calc-operations-btns');



// Operation Functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

// Operate Function
function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            return divide(a, b)
    }
}
