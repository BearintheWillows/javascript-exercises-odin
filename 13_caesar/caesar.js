function caesar(...args) {
    let unicodeString = []
    let capitalArray = []
    let lowerArray = []
    let step
    let letter = ''

    const formCapital = () => {
        let num = 65
        for (let index = 0; index < 26; index++) {
        capitalArray.push(num);
        num++
         }}

    const formLower = () => {
        let num = 97
        for (let index = 0; index < 26; index++) {
            lowerArray.push(num)
            num++
        }
    }
    
    args.forEach(element => {
        if (typeof element === 'number') {
            step = element
        } else {
            for (let index = 0; index < element.length; index++) {
                unicodeString.push(element[index])
            }}
        })

        formCapital()
        formLower()

        let mod = (x, m) => {
            return (x % m + m) % m;
        }
        
        unicodeString.forEach(element => {
            step = step % 26
            let count = 0
            if (element.match(/[A-Z|a-z]/i)) {
            let uniCode = element.charCodeAt(element.index)
                if (uniCode >= 65 && uniCode <= 90) {
                   
                count = capitalArray.indexOf(uniCode)
                count = mod((count + step), capitalArray.length)
                uniCode = capitalArray[count]
                } else if (uniCode >= 97 && uniCode <= 122) {
                    count = lowerArray.indexOf(uniCode)
                    count = mod((count + step), lowerArray.length)
                    uniCode = lowerArray[count]
            
                }
            letter = letter + String.fromCharCode(uniCode)
            } else {
                letter = letter + element
            }
        });
        return letter
    }

    console.log(caesar('Mjqqt, Btwqi!', -5))

// A - 65, Z -90
       //a = 97, z = 122 



// Do not edit below this line
module.exports = caesar;
