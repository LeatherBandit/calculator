const calcButton = Array.from(document.querySelectorAll(".calc-button"));
const calcDisplay = document.querySelector(".inner-display");

calcButton.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case "CLEAR":
                calcDisplay.innerText = "";
                break;
            case "DELETE":
                if (calcDisplay.innerText) {
                    calcDisplay.innerText = calcDisplay.innerText.slice(0, -1);
                }
                break;
            case "=":
                operate()
                break;
            default:
                calcDisplay.innerText += e.target.innerText;

        }
    })
})


function operate() {
    let toBeCalculated = calcDisplay.innerText;
    let arrayofNumbers = toBeCalculated.split(/[\/\*\+\-]/);
    let arrayofOperators = toBeCalculated.split("").filter(character => {
        if (/[\/\*\+\-]/.test(character)) {
            return character
        }
    })

    let runningTotal = 0;

    for (i = 0; i < arrayofOperators.length; i++) {

        switch (arrayofOperators[i]) {
            case "*":
                if (i == 0) {
                    runningTotal = arrayofNumbers[i] * arrayofNumbers[i + 1]
                    break;
                } else {
                    runningTotal = runningTotal * arrayofNumbers[i + 1];
                    break;
                }

            case "+":
                if (i == 0) {
                    runningTotal = Number(arrayofNumbers[i]) + Number(arrayofNumbers[i + 1])
                    break;
                } else {
                    runningTotal = Number(runningTotal) + Number(arrayofNumbers[i + 1]);
                    break;
                }
            case "/":
                if (i == 0) {
                    runningTotal = (Number(arrayofNumbers[i]) / Number(arrayofNumbers[i + 1]));
                    if (runningTotal % 1 !== 0) {
                        runningTotal.toFixed(2);
                    }
                    break;
                } else {
                    runningTotal = (Number(runningTotal) / Number(arrayofNumbers[i + 1]));
                    break;
                }
            case "-":
                if (i == 0) {
                    runningTotal = Number(arrayofNumbers[i]) - Number(arrayofNumbers[i + 1])
                    break;
                } else {
                    runningTotal = Number(runningTotal) - Number(arrayofNumbers[i + 1]);
                    break;
                }

            default:
                console.log("Failed no case match");
        }
    }

    if (runningTotal % 1 !== 0) {
        calcDisplay.innerText = runningTotal.toFixed(2);
    } else {
        calcDisplay.innerText = runningTotal;
    }
}