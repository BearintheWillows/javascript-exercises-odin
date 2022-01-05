const sumAll = function(num1, num2) {
    let numIterable 
    let sum = 0
    let largestNum
    
    if ((num1 > 0 && typeof num1 === "number") && (num2 > 0 && typeof num2 === "number")) {
     if (num1 < num2) {
        largestNum = num2 
        numIterable = num1 
     } else {
         largestNum = num1
         numIterable = num2
     }
    } else {
        return 'ERROR'
    } 

for (let index = 0; index < largestNum; index++) {
        sum = sum + numIterable
        numIterable++

}   

    return sum

};
sumAll(1,4)
// Do not edit below this line
module.exports = sumAll;
