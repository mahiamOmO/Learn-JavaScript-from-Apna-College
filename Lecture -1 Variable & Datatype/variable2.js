{
    let a = 5; // Declare and initialize `a` with value 5
    console.log(a); // Logs 5

    {
        let a = 10; // Declare a new `a` with value 10, scoped to this inner block
        console.log(a); // Logs 10
    }
}
