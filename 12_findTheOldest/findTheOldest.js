const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


const findTheOldest = function(obj) {
    let newArray = []
    let checkNum = 0
    let currentYear = new Date().getFullYear()
    obj.forEach(element => {
        if ('yearOfDeath' in element) {
        newArray.push(element.yearOfDeath - element.yearOfBirth)
        } else {
        newArray.push(currentYear - element.yearOfBirth)
        }
    });

    let largestSum = newArray.reduce(function (accumulatedValue, currentValue) {
        return Math.max(accumulatedValue, currentValue);
      });
    
    return obj[(newArray.findIndex((newArray) => {
        return newArray === largestSum
    }))]

};

console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
