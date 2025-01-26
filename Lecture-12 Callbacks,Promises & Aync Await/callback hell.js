function getData(dataId,getNextData) { 
    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData){
            getNextData();

        }
        
    },2000);
   
}

getData(1,() => {
    console.log("getting data2...");
    getData(2, () => {
       console.log("getting data3...");
        getData(3, () => {
            console.log("getting data4..");
        getData(4);
        
        });

    } );
}); 


