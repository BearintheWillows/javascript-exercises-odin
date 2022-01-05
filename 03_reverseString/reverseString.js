const reverseString = function(str) {
    let array = []
    let newStr = ''

    for (let index = 0; index < str.length; index++) {
        array.push(str[index])
    }

    array.reverse()
    
    array.forEach(element => {
        newStr = newStr + element
    });

    return newStr
};
// Do not edit below this line
module.exports = reverseString;
