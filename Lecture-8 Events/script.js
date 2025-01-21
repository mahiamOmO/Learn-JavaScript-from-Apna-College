let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);

};

let div = document.querySelector("div");
div.onmoueseover = () => {
    console.log("you are inside div");
};
   
