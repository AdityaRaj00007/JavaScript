console.log("Enter Number: ")
let number = parseInt(process.argv[2]);
if(isNaN(number) || number<1){
    console.log("Invalid number");
}
else{
    for(i = 1;i<=number;i++){
        console.log("2 ^",i," is ",Math.pow(2,i));
        
    }
}
