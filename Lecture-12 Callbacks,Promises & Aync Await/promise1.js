let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
    
});

// Properly handle the promise
promise.then((result) => {
    console.log("Promise fulfilled:", result);
}).catch((error) => {
    console.log("Promise rejected:", error);
});
