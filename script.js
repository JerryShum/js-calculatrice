// Defining Variables
let firstNum = '';
let secondNum = '';
let operator = null;

// Selecting / Creating DOM elements
const primaryDisplayElement = document.querySelector('.display-primary');
const secndaryDisplayElement = document.querySelector('.display-secondary');
const calcBtnElements = document.querySelectorAll('.btn');

calcBtnElements.forEach((btn) => btn.addEventListener('click', updateDisplay));

function updateDisplay() {
    let value = this.value;

    if (/[0-9, . ]/.test(value)) {
        appendNum(value);

    } else if (value == "CLEAR") {
        console.log("clear");
        clear();
    } else if (value == "DELETE") {
        deleteValue();
    }
    else if (value == '=') {
        console.log('equals');
    }
    else {
        appendOperator(value);
    }
}

function appendNum(value) {
    if (value === '.' && firstNum.includes('.')) {
        return;
    }

    if (operator == null) {
        firstNum += value;
    } else if (operator != null) {
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

function solve(value) {

}

function clear() {
    firstNum = '';
    secondNum = '';
    operator = null;

    primaryDisplayElement.textContent = '';
}

function deleteValue() {
    // if (/[0-9, . ]/.test(primaryDisplayElement.textContent.slice(0, -1))) {
    //     primaryDisplayElement.textContent = primaryDisplayElement.textContent.slice(0, -1);
    //     firstNum == primaryDisplayElement.textContent.slice(0, -1);
    //     console.log(primaryDisplayElement.textContent.slice(0, -1));
    //     // console.log(firstNum);

    // }
}

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
