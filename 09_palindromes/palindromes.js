const palindromes = function (word) {
    let array = []
    let strippedWord = word.replace(/[^\w\s]|_/g,"").toLowerCase().replaceAll(' ', '')
    console.log(strippedWord)
    let reversedWord = ''
    for (let index = 0; index < strippedWord.length; index++) {
        const element = strippedWord[index];
        array.push(element)
    }
        array.reverse()


        array.forEach(element => {
            reversedWord = reversedWord + element
        });
        console.log(reversedWord)


        return reversedWord === strippedWord ? true : false
    };
palindromes('A car, a man, a maraca.')
// Do not edit below this line
module.exports = palindromes;
