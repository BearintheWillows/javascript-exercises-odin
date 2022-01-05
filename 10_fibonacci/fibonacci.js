const fibonacci = function(num) {
    let array = []
    let step = 0
    num = parseInt(num)
    if (num > 0  || num === String) {
    for (let index = 0; index < num; index++) {
        array.push(step)
        step++
    }

    for (let index = 2; index < num + 1; index++) {
        let element = array[index];
        step = array[index - 2] + array[index - 1]
        console.log(array[index-2], array[index-1])
        console.log(`step: ${step}`)
        array[index] = step
 }
        return step
   } else {
        return 'OOPS'
    }
};
fibonacci('10')
// Do not edit below this line
module.exports = fibonacci;
