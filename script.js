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
            default:
                calcDisplay.innerText += e.target.innerText;

        }
    })
})


function operate() {
    let toBeCalculated = calcDisplay.innerText;
    let arrayofNumbers = toBeCalculated.split(/[\/\*\+\-]/);
    let arrayofOperators = toBeCalculated.split("").forEach(e => {
        // if operator is a symbol like +-.* add to new array. Will probably need map for this instead.
    })
    arrayofString.forEach(e => console.log(e));
}