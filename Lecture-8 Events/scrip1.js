let btn1 = document.querySelector("#btn1");

// Adding Event Listener 1
btn1.addEventListener("click", (evt) => {
    console.log("btn1 was clicked - handler1");
    console.log(evt);
    console.log(evt.type);
});

// Adding Event Listener 2
btn1.addEventListener("click", (evt) => {
    console.log("btn1 was clicked - handler2");
    console.log(evt);
    console.log(evt.type);
});

// Defining a handler for removal
const handler3 = () => {
    console.log("btn1 was clicked - handler3");
};

// Adding and removing the same event listener
btn1.addEventListener("click", handler3);
btn1.removeEventListener("click", handler3);
