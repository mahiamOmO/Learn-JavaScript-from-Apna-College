let arr = [1, 2, 3, 4, 5, 6, 7];

// Using the reduce method with proper arrow function syntax
const output = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(output); // Logs the sum of the array elements
