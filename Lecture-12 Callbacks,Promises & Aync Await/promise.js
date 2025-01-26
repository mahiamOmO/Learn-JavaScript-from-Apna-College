let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
    // Uncomment the following line to test rejection
    // reject("some error occurred");
});

promise
    .then((result) => {
        console.log("Promise fulfilled:", result);
    })
    .catch((error) => {
        console.log("Promise rejected:", error);
    });

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data:", dataId);
            if (getNextData) {
                getNextData(); // Call the next function if provided
            }
            resolve("Data processed successfully"); // Resolve the promise
        }, 2000);
    });
}

// Example usage of getData
getData(1, () => {
    console.log("Next data function called!");
}).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log("Error:", error);
});
