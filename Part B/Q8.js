//Inbuilt HOF – map, filter, reduce, sort
let nums = [10, 3, 7, 20, 13, 2];
let squares = nums.map(num => num * num);
function isPrime(num){
    if(num<= 1)
        return false;
    for(let i = 2; i <=Math.sqrt(num); i++){
        if(num % i === 0)
            return false;
    }
    return true;
}
let primeNumbers = nums.filter(isPrime);

let sum = nums.reduce((a, b) => a + b, 0);

let sortDes = nums.sort((a,b) => b - a);
console.log(squares);
console.log(primeNumbers);
console.log(sum);
console.log(sortDes);