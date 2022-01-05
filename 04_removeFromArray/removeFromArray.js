const removeFromArray = function(array, ...arg) {
    arg.forEach(element => {
        
    for (let index = 0; index < array.length; index++) {
        if (array[index] === element) {
            array.splice(index, 1)
        }
    }
    })
    return array
    }



// Do not edit below this line
module.exports = removeFromArray;
