function sum(a,b){
    console.log(a+b);
}
function calculator (a,b) {
    sumCallback(a,b);

}

calculator(1,2,sum (a,b) => {
    console.log(a + b);
});