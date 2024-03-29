// Defining Variables
let firstNum = '';
let secondNum = '';
let operator = null;

// Selecting / Creating DOM elements
const primaryDisplayElement = document.querySelector('.display-primary');
const secondaryDisplayElement = document.querySelector('.display-secondary');
const calcBtnElements = document.querySelectorAll('.btn');

calcBtnElements.forEach((btn) => btn.addEventListener('click', buttonPress));

function buttonPress() {
    let value = this.value;

    if (/[0-9, . ]/.test(value)) {
        appendNum(value);

    } else if (value == "CLEAR") {
        console.log("CLEAR");
        clear();
    } else if (value == "DELETE") {
        console.log("DELETE");

        deleteValue();
    }
    else if (value == '=') {
        solve();
    }
    else {
        appendOperator(value);
    }
}

function appendNum(value) {


    if (operator == null) {
        if (value === '.' && firstNum.includes('.')) {
            return;
        }
        firstNum += value;
    } else if (operator != null) {
        if (value === '.' && secondNum.includes('.')) {
            return;
        }
        secondNum += value;
    }
    console.log(firstNum);
    console.log(secondNum);



    primaryDisplayElement.textContent += `${value}`
}

function appendOperator(value) {
    if (operator != null) {
        // solve if there already exists an operator 
        // switch to num2
        return;
    }

    operator = value;
    primaryDisplayElement.textContent += ` ${value} `;

}

function solve() {

    if (operator == null) {
        return;
    }

    let result = parseFloat(operate(firstNum, secondNum, operator).toFixed(8));
    console.log(operator);
    console.log(result);

    secondaryDisplayElement.textContent = primaryDisplayElement.textContent + ' =';
    primaryDisplayElement.textContent = `${result}`
    firstNum = result.toString();
    secondNum = '';
    operator = null;


}

function clear() {
    firstNum = '';
    secondNum = '';
    operator = null;

    primaryDisplayElement.textContent = '';
    secondaryDisplayElement.textContent = '';
}

function deleteValue() {
    let newString = '';
    let deletedChar = '';

    console.log("OG TEXT:" + primaryDisplayElement.textContent);

    // Returns the last character
    deletedChar = primaryDisplayElement.textContent.slice(-1);

    if (deletedChar === ' ') {
        // Deletes the last 3 chars
        operator = null;
        secondNum = '';
        newString = primaryDisplayElement.textContent.slice(0, -3);
    } else {
        // Returns from 0 to everything before the last char
        newString = primaryDisplayElement.textContent.slice(0, -1);

        if (operator == null) {
            firstNum = firstNum.slice(0, -1);
        } else if (operator != null) {
            secondNum = secondNum.slice(0, -1);
        }
    }

    console.log("firstNUm: " + firstNum);
    console.log("SecondNum: " + secondNum);


    primaryDisplayElement.textContent = newString;



}


// Operation Functions
function add(a, b) {
    let first = parseFloat(a);
    let second = parseFloat(b);

    return first + second;
};

function subtract(a, b) {
    let first = parseFloat(a);
    let second = parseFloat(b);
    console.log(first - second);
    return first - second;
};

function multiply(a, b) {
    let first = parseFloat(a);
    let second = parseFloat(b);
    console.log(first * second);
    return first * second;
};

function divide(a, b) {
    let first = parseFloat(a);
    let second = parseFloat(b);

    if (second == 0) {
        return undefined;
    }
    return first / second;
};

// Operate Function
function operate(a, b, operator) {
    console.log(a);
    console.log(b);
    console.log("inside operate" + operator);
    switch (operator) {
        case '+':
            return add(a, b)
        case '−':
            return subtract(a, b)
        case '×':
            return multiply(a, b)
        case '÷':
            return divide(a, b)
    }
}
