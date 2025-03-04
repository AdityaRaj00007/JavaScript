//read input
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

//arithmetic operations
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

//store result
let results = [result1, result2, result3, result4];

//find maximum and minimum value
let maxResult = Math.max(...results);
let minResult = Math.min(...results);

console.log("Maximum Value: ",maxResult);
console.log("Minimum Value: ",minResult);