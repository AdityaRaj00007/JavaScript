let start = Number(process.argv[2]); 
let end = Number(process.argv[3]);   
function isPrime(number) {
    if (number < 2) 
        return false; 
    for (i=2; i<=Math.sqrt(number);i++) {
        if (number%i==0)
             return false;
    }
    return true; 
}
if (start < 1 || end < 1 || start > end) {
    console.log("enter a valid positive range");
} else {
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}