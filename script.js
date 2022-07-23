'use strict'

const buttons = document.querySelectorAll('.buttons');
const input = document.querySelector('.calcInput');

buttons.forEach((elem) => {
    elem.addEventListener('click', (event) => f(event));
});

const f = (event) => {
    let buttonValue = event.currentTarget.innerText;
    if (!(buttonValue === "Calculate")) {
        input.value += buttonValue;
    } else {
        calculate(input.value);
    }
};

function calculate(expression) {
    console.log(expression);
    parseExpression(expression);
}

function parseExpression(expression) {
    let regex = ;
}
