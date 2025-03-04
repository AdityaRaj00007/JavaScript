function generateRandom(){
    return Math.floor(Math.random()*900 +100 );
}
let number = [];
for(let i=0;i<5;i++){
    number[i] = generateRandom();
}
console.log(number);
// find minimum and maximum 
let min = number[0];
let max = number[0];
for(let i=0;i<number.length;i++){
    if(number[i]>max){
        max = number[i];
    }
    if(number[i]<min){
        min = number[i];
    }
}
console.log("min: ",min ,"\nmax: ",max);