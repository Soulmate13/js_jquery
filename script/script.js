// Создать Калькулятор. Реализовать его функциональность.

let num1 = ''; // declaring variables
let num2 = '';
let operator = '';
let total = '';

$(document).ready(function () {
    $('button').on('click', function (e) {
        let btn = e.target.innerHTML;

        if (btn >= '0' && btn <= '9') {
            HandleNumber(btn);
        }

        else {
            HandleOperator(btn);
        }

    });
});

function HandleNumber(num) {
    if (num1 === '') { // if the first number is empty we assign num to it
        num1 = num;
    }

    else { // if it is not empty we assign num to num2
        num2 = num;
    }
    DisplayButton(num); // displaying the number after assignment
};

function HandleOperator(oper) {
    if (operator === '') {
        operator = oper; //assigning the operator
    }

    else {
        HandleTotal();
        operator = oper;
    }
}

function HandleTotal() {
    switch (operator) {
        case '+': total = +num1 + +num2;
            DisplayButton(total);
            break;
        case '-': total = +num1 - +num2;
            DisplayButton(total);
            break;
        case '/': total = +num1 / +num2;
            DisplayButton(total);
            break;
        case 'X': total = +num1 * +num2;
            DisplayButton(total);
            break;
    }

    UpdateVariables();
}

function DisplayButton(btn) {
    $('.calculator-result-input').text(btn); // function used to display the number in the specific div
}

function UpdateVariables() {
    num1 = total;
    num2 = '';
}