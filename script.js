const calcNumbers = Array.from(document.querySelectorAll(".number"));
const calcDisplay = document.querySelector(".inner-display");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const decimalBtn = document.querySelector(".decimal");
const equalBtn = document.querySelector(".equals");
const addBtn = document.querySelector(".add");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const subtractBtn = document.querySelector(".subtract");


let valueOne = undefined;
let valueTwo = undefined;
let operatorJustClicked = false; //Tracks last click of operator keys +-*/


function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (a == 0 || b == 0) {
        return "Nice Try";
    }
    const divided = a / b;
    console.log(divided)
    return (Number(divided.toFixed(4)));
}

calcNumbers.forEach(element => { //Add event listeners to each number & append it to display
    element.addEventListener('click', function () {
        appendToDisplay(this.innerText);
        console.log(displayValue);
    })
})

function appendToDisplay(string) {
    if (operatorJustClicked == true) { //will clear display on number click if last press was a operator.
        calcDisplay.innerText = "";
        operatorJustClicked = false;
    }
    calcDisplay.innerText = calcDisplay.innerText + string // Append to display
    displayValue = calcDisplay.innerText;
}

clearBtn.addEventListener('click', function () {
    //Set everything to default, clear display
    clear();
})

deleteBtn.addEventListener('click', function () {
    console.log("Delete was clicked")
})

decimalBtn.addEventListener('click', function () {
    console.log("Decimal was clicked")
})

equalBtn.addEventListener('click', function () {
    //Take current display number and add to previous sum = display to output. 
    console.log("equal was clicked")
})

addBtn.addEventListener('click', function () {
    operate("add");
})

divideBtn.addEventListener('click', function () {
    operate("divide");
})

multiplyBtn.addEventListener('click', function () {
    operate("multiply");
})

subtractBtn.addEventListener('click', function () {
    operate("subtract");
})

function clear() {
    calcDisplay.innerText = "";
    valueOne = undefined;
    valueTwo = undefined;
    operatorJustClicked = false;
}

function operate(operator) {
    switch (operator) {
        case "add":
            console.log("Add was clicked")
            if (calcDisplay.innerText === "") return; // do nothing if input is blank
        
            if (valueOne === undefined) { //if the first value is undefined and not blank - set it to current.
                valueOne = calcDisplay.innerText;
            } else if (valueOne != undefined) { //if the valueOne is not undefined then this must be the second value.
                valueTwo = calcDisplay.innerText;
                let tempTotal = (add(valueOne, valueTwo)).toString();
                calcDisplay.innerText = tempTotal;
                valueOne = tempTotal;
                valueTwo = undefined;
                
            }
            operatorJustClicked = true;
            break;
        
        case "subtract":
            console.log("Add was clicked")
            if (calcDisplay.innerText === "") return; // do nothing if input is blank
    
            if (valueOne === undefined) { //if the first value is undefined and not blank - set it to current.
                valueOne = calcDisplay.innerText;
            } else if (valueOne != undefined) { //if the valueOne is not undefined then this must be the second value.
                valueTwo = calcDisplay.innerText;
                let tempTotal = (subtract(valueOne, valueTwo)).toString();
                calcDisplay.innerText = tempTotal;
                valueOne = tempTotal;
                valueTwo = undefined;
                
            }
            operatorJustClicked = true;
            break;

        case "divide":
            console.log("Add was clicked")
            if (calcDisplay.innerText === "") return; // do nothing if input is blank
        
            if (valueOne === undefined) { //if the first value is undefined and not blank - set it to current.
                valueOne = calcDisplay.innerText;
            } else if (valueOne != undefined) { //if the valueOne is not undefined then this must be the second value.
                valueTwo = calcDisplay.innerText;
                let tempTotal = (divide(valueOne, valueTwo)).toString();
                calcDisplay.innerText = tempTotal;
                valueOne = tempTotal;
                valueTwo = undefined;
                
            }
            operatorJustClicked = true;
            break;

        case "multiply":
            console.log("Add was clicked")
            if (calcDisplay.innerText === "") return; // do nothing if input is blank
        
            if (valueOne === undefined) { //if the first value is undefined and not blank - set it to current.
                valueOne = calcDisplay.innerText;
            } else if (valueOne != undefined) { //if the valueOne is not undefined then this must be the second value.
                valueTwo = calcDisplay.innerText;
                let tempTotal = (multiply(valueOne, valueTwo)).toString();
                calcDisplay.innerText = tempTotal;
                valueOne = tempTotal;
                valueTwo = undefined;
                
            }
            operatorJustClicked = true;
            break;
    }
}

/* Works kind of?
Need to fix issue where the operation happens on the second operator click. For example:
4 + 6 - evalutes to 4 - 6.
Same operator works fine due to that logic. 
4 + 6 + 6 + etc etc always works. 

Possible solution would be to check if both values exists and do the current operator - track current operator. 

*/ 