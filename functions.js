const add = function(a,b) {
    return a+b;
}

const subtract = function(a,b) {
    return a-b;
}

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b){
    return a/b;
}

let currentNumber = 0;  //need to get user's input prompt()
let operator = "*"
let previousNumber = null;

const operate = (first, second, operator) => {
    //use the operators from above;
}

const displayValue = () => {
    let display = document.querySelector(".display-current");
    let digitButtons = document.querySelectorAll(".digits");
    digitButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            // event.target.style.background = 'blue';
            if (display.textContent === "0") display.textContent = "";
            display.textContent += event.target.textContent;
        })
    });

    let value;
    let inputOperator;
    let operators = document.querySelectorAll('.operators');
    operators.forEach((operator)=>{
        operator.addEventListener("click", (event) => {
            value = parseInt(display.textContent);
            inputOperator = event.target.textContent
        })
    })
    

    // display.textContent += lol;
}

let operators = document.querySelectorAll('.operators');
operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        currentNumber = parseFloat(display.textContent);
        switch(operator.textContent) {
            case '+': previousNumber = add(previousNumber, currentNumber); break; //need to do this before the 2nd number
            case '-': previousNumber = subtract(previousNumber, currentNumber); break;
            case '×': multiply(previousNumber, currentNumber); break;
            case '÷': divide(previousNumber, currentNumber); break;
        }
        
    })
})


let firstValue = displayValue()
