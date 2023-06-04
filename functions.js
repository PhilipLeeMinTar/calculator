const equal = document.querySelector(".equal");
const deleted = document.querySelector(".delete");
const operators = document.querySelectorAll(".operator");
const prevDisplay = document.querySelector(".display-previous");
const curDisplay = document.querySelector(".display-current");
const digitButtons = document.querySelectorAll(".digits");
const clear = document.querySelector(".clear");
const period = document.querySelector(".period");

let currentNumber = "";  //need to get user's input prompt()
let previousNumber = "";
let op = ""
let pressEqual = false;

digitButtons.forEach(digit => {
    digit.addEventListener('click', (event)=>{
        if (pressEqual == true) {
            currentNumber = "";
            pressEqual = false;
        }    
        displayValue(event.target.textContent);
    })
})

function displayValue(numberString) {
    if (currentNumber.length === 10) return;
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
        prevDisplay.textContent = previousNumber + " " + event.target.textContent;
        curDisplay.textContent = "0"
        currentNumber = "";
        op = event.target.textContent;
    })
})

equal.addEventListener('click', operate);

function operate(){
    let result = "";
    
    switch(op) {
        case '+': result = Number(previousNumber) + Number(currentNumber); break; //need to do this before the 2nd number
        case '-': result = Number(previousNumber) - Number(currentNumber); break;
        case '×': result = Number(previousNumber) * Number(currentNumber); break;
        case '÷': result = divide(Number(previousNumber) ,Number(currentNumber)); break;
        default: return;
    }
    if (result === "Error") {
        currentNumber = "";
        curDisplay.textContent = result;
        return;
    }
    if (result.toString().length >= 8){
        result = Math.round(result * 100000000) / 100000000;
    }
    prevDisplay.textContent += " " + currentNumber;
    currentNumber = result.toString();
    curDisplay.textContent = currentNumber;
    op = "";
    pressEqual = true;
}

function divide(prev, cur){
    if (cur === 0){
        return "Error";
    }
    return prev/cur;
}

clear.addEventListener('click', ()=>{
    prevDisplay.textContent = "";
    curDisplay.textContent = "0";
    currentNumber = "";  //need to get user's input prompt()
    previousNumber = "";
    op = ""
    pressEqual = false;
})

deleted.addEventListener('click', ()=>{
    currentNumber = currentNumber.slice(0,-1);
    if (currentNumber == ""){
        curDisplay.textContent = "0";
    } else {
        curDisplay.textContent = currentNumber;
    }
})

period.addEventListener('click', ()=>{
    if (!currentNumber.includes(".")){
        displayValue(".");
    }
})


/*THINGS TO TAKE NOTE:
-There can still be overflow in display after operate in curDisplay

*/