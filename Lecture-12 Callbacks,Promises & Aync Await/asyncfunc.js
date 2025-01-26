function asyncFunc() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
         console.log("some data1");
         resolve("success");

        },4000);

    });
}
console.log("fetching data1");
let p1 = asyncFunc();
p1.then(() =>{
    console.log(res);
});


console.log("fetching data2");
let p2 = asyncFunc();
p2.then(() =>{
    console.log(res);
});