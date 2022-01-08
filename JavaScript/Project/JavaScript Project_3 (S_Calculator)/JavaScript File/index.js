let num1 = 5;
let num2 = 7;

let first = document.getElementById("first_number");

first.textContent += " " + num1;
let second = document.getElementById("second_number");
second.textContent += " " + num2;

let result = document.getElementById("result");

function add() {

    let result1 = num1 + num2;
    result.textContent = "Result :" + result1;
    result1 = 0;
}

function sub() {
    let result1 = num1 - num2;
    result.textContent = "Result :" + result1;
    result1 = 0;
}

function div() {
    let result1 = num1 / num2;
    result.textContent = "Result :" + result1;

    result1 = 0;
}

function mul() {
    let result1 = num1 * num2;
    result.textContent = "Result :" + result1;

    result1 = 0;
}