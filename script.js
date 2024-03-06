const display = document.getElementById('display');
let currentNumber = '';
let operator = null;

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function setOperator(op) {
    if (operator !== null || currentNumber === '') return;
    operator = op;
    currentNumber += ' ' + operator + ' ';
    updateDisplay();
}

function calculateResult() {
    if (operator === null || currentNumber.slice(-2) === ' ') return;
    try {
        const result = eval(currentNumber);
        display.value = result;
        currentNumber = '' + result;
        operator = null;
    } catch (error) {
        display.value = 'Error';
        currentNumber = '';
        operator = null;
    }
}

function clearDisplay() {
    currentNumber = '';
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentNumber;
}
