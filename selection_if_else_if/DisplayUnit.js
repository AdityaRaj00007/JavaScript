const array = new Array(1,10,100,1000);

for(let i=0;i<array.length;i++){
    if(array[i] / 1 === 1){
        console.log("onces");
    }
    else if(array[i] / 10 ===  1){
        console.log("tens");
    }
    else if(array[i] / 100 === 1){
        console.log("hundered");
    }
    else{
        console.log("thousand");
    }
}