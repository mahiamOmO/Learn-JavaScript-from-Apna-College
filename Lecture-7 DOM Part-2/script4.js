let newHeading = document.createElement("h1");
h1.innerHtml = "<i>Hi,I am new!</i>";


document.querySelector("body").prepand(newHeading);

let para = document.querySelector("p");
para.remove();

newHeading.remove();