let nums = [67, 52, 39]; // Fixed variable name from `num` to `nums`

let newArr = nums.map((val) => {
    return val * 2;
});

console.log(newArr); 

// Arrow function to calculate square
let calcSquare = (num) => {
    console.log(num * num);
};

// Example usage of `calcSquare`
calcSquare(5); // Logs the square of 5
