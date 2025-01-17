let arr = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr); // Logs the array of even numbers
