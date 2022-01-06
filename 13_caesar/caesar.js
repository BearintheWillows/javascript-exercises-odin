const caesar = function(...args) {
    let letter = ''
    let array = []
    let step = 0
    console.log(args)

    args.forEach(element => {
        console.log(element)
        if (typeof element === 'number') {
            step = element
        } else {
            
            for (let index = 0; index < element.length; index++) {
                const element2 = element[index];
                array.push(element2)
            }
        
    }})
    console.log(array)
    array.forEach(element => {
        if (element.match(/[A-Z|a-z]/i)) {
        let uniCode = element.charCodeAt(element.index) + step
        letter = letter + String.fromCharCode(uniCode)
        } else {
            letter = letter + element
        }
    });
       // A - 65, Z -90
       //a = 97, z = 122 m

    return letter
};
console.log(caesar('W', 5))
// Do not edit below this line
module.exports = caesar;
