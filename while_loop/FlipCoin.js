let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 || tailsCount < 11) {
    //generate a random number
    const result = Math.floor(Math.random() * 2);
    if (result%2 === 0) {
        headsCount++;
    } else {
        tailsCount++;
    }
    
}

if (headsCount === 11) {
    console.log("Heads wins 11 times");
} else {
    console.log("Tails wins 11 times");
}