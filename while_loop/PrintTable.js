let number = Number(process.argv[2]);
function printPowersOfTwo(number) {
    if (number < 0) {
        console.log("enter positive integer");
        return;
    }


    let i = 0;
    let power = 1;
    while (i <= number && power <= 256) {
        console.log("2 ^",i," is ",Math.pow(2,i));
        power *= 2;
        i++;
    }
}
printPowersOfTwo(number);