//Rest Operator (Function Parameters)
function sumAll(...nums){
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4));
