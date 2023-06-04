const equal = document.querySelector(".equal");
const deleted = document.querySelector(".delete");
const operators = document.querySelectorAll(".operator");
const prevDisplay = document.querySelector(".display-previous");
const curDisplay = document.querySelector(".display-current");
const digitButtons = document.querySelectorAll(".digits");

let currentNumber = "";  //need to get user's input prompt()
let operator = "*"
let previousNumber = 0;
// let pressOperator = false;
digitButtons.forEach(digit => {
    digit.addEventListener('click', (event)=>{
        displayValue(event.target.textContent);
        // operate();
    })
})

function displayValue(numberString) {
    currentNumber += numberString;
    if (currentNumber === ""){
        curDisplay.textContent = "0";
        return;
    }
    curDisplay.textContent = currentNumber;
    // console.log(currentNumber);
}

operators.forEach(operator => {
    operator.addEventListener('click', (event)=>{
        previousNumber = currentNumber;
        prevDisplay.textContent = previousNumber + " " + operator.textContent;
        curDisplay.textContent = "0"
        currentNumber = "";
        op = operator.textContent;
    })
})

equal.addEventListener('click', operate);

function operate(){
    let result = "";
    
    switch(op) {
        case '+': result = Number(previousNumber) + Number(currentNumber); break; //need to do this before the 2nd number
        case '-': result = Number(previousNumber) - Number(currentNumber); break;
        case '×': result = Number(previousNumber) * Number(currentNumber); break;
        case '÷': result = Number(previousNumber) / Number(currentNumber); break;
    }
    currentNumber = result.toString();
    curDisplay.textContent = currentNumber;
}
