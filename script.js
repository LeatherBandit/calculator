
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if (a == 0 || b == 0){
        return "Nice Try";
    }
    const divided = a/b;
    console.log(divided)
    return Number(divided.toFixed(4));
}


console.log(divide(6, 2.44));
console.log(divide(6, 2.44));

console.log(add(5,6));