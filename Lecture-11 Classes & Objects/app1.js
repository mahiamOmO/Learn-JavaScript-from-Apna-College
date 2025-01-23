const employee = {
    calcTax() {
        console.log("Tax rate is 10%"); // Generally written this way
    },
};

const karanArjun = {
    salary: 50000,
};

// Properly set the prototype using Object.setPrototypeOf
Object.setPrototypeOf(karanArjun, employee);

// Now karanArjun can access the calcTax method
karanArjun.calcTax(); // Output: Tax rate is 10%
karanArjun1.calcTax();
karanArjun2.calcTax();
karanArjun3.calcTax();
