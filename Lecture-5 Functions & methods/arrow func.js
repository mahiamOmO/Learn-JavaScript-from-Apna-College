// Sum function (regular)
function sum(a, b) {
    return a + b;
}

// Sum function (arrow function)
const arrowSum = (a, b) => {
    return a + b;
};

// Or even shorter (concise arrow function for single-line return)
const arrowSumShort = (a, b) => a + b;

// Multiplication function (regular)
function mul(a, b) {
    return a * b;
}

// Multiplication function (arrow function)
const arrowMul = (a, b) => {
    return a * b;
};

// Or concise arrow function for single-line return
const arrowMulShort = (a, b) => a * b;

// Test the functions
console.log("Sum (regular):", sum(3, 4)); // 7
console.log("Sum (arrow):", arrowSum(3, 4)); // 7
console.log("Sum (short arrow):", arrowSumShort(3, 4)); // 7

console.log("Multiplication (regular):", mul(3, 4)); // 12
console.log("Multiplication (arrow):", arrowMul(3, 4)); // 12
console.log("Multiplication (short arrow):", arrowMulShort(3, 4)); // 12
