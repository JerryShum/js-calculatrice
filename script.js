// Defining Variables
let firstNum = '';
let secondNum = '';
let operator = null;

// Selecting / Creating DOM elements
const primaryDisplayElement = document.querySelector('.display-primary');
const secndaryDisplayElement = document.querySelector('.display-secondary');
const calcBtnElements = document.querySelectorAll('.btn');

calcBtnElements.forEach((btn) => btn.addEventListener('click', buttonPress));

function buttonPress() {
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
        solve();
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

function solve() {
    let result = operate(firstNum, secondNum, operator);
    console.log(operator);
    console.log(result);

    primaryDisplayElement.textContent = `${result}`
    firstNum = result;
    secondNum = '';
    operator = null;


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
    let first = parseInt(a);
    let second = parseInt(b);
    return first + second;
};

function subtract(a, b) {
    let first = parseInt(a);
    let second = parseInt(b);
    console.log(first - second);
    return first - second;
};

function multiply(a, b) {
    let first = parseInt(a);
    let second = parseInt(b);
    console.log(first * second);
    return first * second;
};

function divide(a, b) {
    let first = parseInt(a);
    let second = parseInt(b);
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
