'use strict'

const buttons = document.querySelectorAll('.buttons');
const input = document.querySelector('.calcInput');

buttons.forEach((elem) => {
    elem.addEventListener('click', (event) => f(event));
});

const f = (event) => {
    let buttonValue = event.currentTarget.innerText;
    buttonValue === "Calculate" ? calculate(input.value) : input.value += buttonValue;
};

function calculate(expression) {
    let parsedExpression = parseExpression(expression);
    console.log(countExpression(parsedExpression));
}

function parseExpression(expression) {
    return expression.split("");
}
