let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div"); //let div = document.querySelector("p");
div.append(newBtn); //prepend
//div.Before(newBtn);
//p.after(newBtn);