'use strict'

const buttons = document.querySelectorAll('.buttons');
const input = document.querySelector('.calcInput');

const actions = {
    addition : {
        value: "+",
        func: (a, b) => a + b
    },
    subtraction : {
        value: "-",
        func: (a, b) => a - b
    },
    multiplication : {
        value: "*",
        func: (a, b) => a * b
    },
    division : {
        value: "/",
        func: (a, b) => a / b
    }
}

buttons.forEach((elem) => {
    elem.addEventListener('click', (event) => f(event));
});

const f = (event) => {
    let buttonValue = event.currentTarget.innerText;
    buttonValue === "Calculate" ? calculate(input.value) : input.value += buttonValue;
};

function calculate(expression) {
    console.log(findBrackets(expression));
}

function findBrackets(expression) {
    let pattern = new RegExp(/\((\d*.\d*)\)/);
    let parsingResult = String(expression).match(pattern);
    if (parsingResult) {
        return parseExpression(String(expression).replace(/\((\d*.\d*)\)/, parseExpression(parsingResult[1])));
    } else {
        return parseExpression(expression);
    }
}

function parseExpression(expression) {
    let pattern = new RegExp(/\d+|./, "g");
    let parsedExpression = expression.match(pattern);
    let answer;
    Object.keys(actions).map((action) => {
        if (String(parsedExpression[1]) === actions[action].value) {
            answer = actions[action].func(Number(parsedExpression[0]), Number(parsedExpression[2]));
        }
    });
    return answer;
}
