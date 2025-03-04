//method to flip a coin
function flipCoin() {
    const result = Math.floor(Math.random() * 2);
    if (result%2 === 0) {
        console.log("heads");
    } else {
        console.log("tails");
    }
}
flipCoin();