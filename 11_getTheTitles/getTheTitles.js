const getTheTitles = function(obj) {
    let titleArray = []
    obj.forEach(element => {
         titleArray.push(element.title)
    });
    return titleArray
};

// Do not edit below this line
module.exports = getTheTitles;
