let number = parseInt(process.argv[2]);
function checkPrime(number) {
    if (!number < 1) {
        console.log("enter positive integer");
        return false;
    }
    if(number<2){
        return false;
    }
    for(i=2;i<number;i++){
        if (number%i==0) {
            return false;
        }
    }
    return true;
}
console.log(number,"is Prime ",checkPrime(number));
