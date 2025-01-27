const URL = "https://cat-fact.herokuapp.com/facts";

const getfacts = asyns() => {
    console.log("getting data...");
    let response = fetch(URL);
    console.log(response); //JSON format
    letdata = await response.json();
    factPara.innerText = data[2].text;
};

function getFacts(){

}
fetch(URL).then((response)=> {
   return  response.json();
})
.then((data)=> {
    console.log(data);
    factPara.innerText = data[2].text;
});


btn.addEventListener("click",getFacts);





