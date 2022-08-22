const calcButtons = Array.from(document.querySelectorAll(".calc-button"));
const calcDisplay = document.querySelector(".inner-display")


let memoryPositionOne = '';
let memoryPositionTwo = '';
const decimalCount = 0;
let currentOperator = "";

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


function sqrt(a, b) {

}

function modulus(a, b) {

}

function equals(a, b) {
    console.log(a + " + " + b)
    if (a == "" || b == "") return;
    
    switch(currentOperator) {
        case '%':
            console.log("Modulus");
            break;
        case '√':
            console.log("sqrt")
            break;
        case '*':
            console.log("multiplied");
            break;
        case "/":
            console.log("Divided");
            break;
        case "-":
            console.log("Subtracted");
            break;
        case ".":
            console.log("decimal Added");
            break;
        case "+":
            console.log("We made it here")
            calcDisplay.innerText = (add(a,b).toString());
            memoryPositionOne = calcDisplay.innerText;
            memoryPositionTwo = "";
    }

}

function operatorAction(string) {
    switch (string) {
        case 'DELETE':
            console.log("Deleted");
            break;
        case 'CLEAR':
            console.log("Cleared");
            break;
        case '%':
            console.log("Modulus");
            break;
        case '√':
            console.log("sqrt")
            break;
        case '*':
            console.log("multiplied");
            break;
        case "/":
            console.log("Divided");
            break;
        case "-":
            console.log("Subtracted");
            break;
        case ".":
            console.log("decimal Added");
            break;
        case "=":
            console.log("Equals was accessed")
            memoryPositionTwo = calcDisplay.innerText;
            clear();
            equals(memoryPositionOne, memoryPositionTwo)
            break;
        case "+":
            memoryPositionOne = calcDisplay.innerText;
            currentOperator = string;
            clear();
            break;
    }
    
    
}

function appendToDisplay(string) {
    if (memoryPositionOne.toString().length >= 15) return; //Limits screen output to 15.
    if (isNaN(string)) { // Checks to verify the nubmer is a number- if not it is an operator. 
        console.log(string + " is not a number.")
        operatorAction(string)
        return;
    }

    calcDisplay.innerText = calcDisplay.innerText + string // Append to display
    memoryPositionOne = Number(calcDisplay.innerText); // Modify global variable
}


calcButtons.forEach(element => {
    element.addEventListener('click', function () {
        appendToDisplay(this.innerText);
    })
})


function clear(){
    calcDisplay.innerText= '';
}



/*
What needs to happen:
1. Click Buttons
2. if an operator is clicked clear the display and save the previous entry.
3. if clear is clicked clear.
4. if delete is clicked- remove last entry unless there are no entries.


SO MANY BUGS
*/
