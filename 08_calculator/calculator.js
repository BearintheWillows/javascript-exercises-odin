let newNum 
const add = function(...args) {
  newNum = 0
	args.forEach(element => {
    console.log(`${newNum}`)
    newNum = newNum + element
  });
  return newNum
};

const subtract = function(a, b) {
  

  return a - b
};

const sum = function(...args) {
 let nextNum = 0 
args.forEach(element => {
  element.forEach(newElement => {
    nextNum = nextNum + newElement
  });
});
  return parseInt(nextNum)
};

const multiply = function(...args) {
  let nextNum = 1
  args.forEach(element => {
    element.forEach(newElement => {
    nextNum = nextNum * newElement
    });
  });
    return parseInt(nextNum)
};

const power = function(a, b) {
  let finalNum = 1
for (let index = 0; index < b; index++) {
    finalNum = finalNum * a

  
}
return finalNum
};


const factorial = function(a) {
	let reduceNum = a
  let newNum = a
  console.log(reduceNum)
  if (reduceNum === 0) {
    return 1
  } else {
  while (reduceNum > 1) {
    newNum = newNum * (reduceNum - 1)
    reduceNum--
  }}
  return newNum
};
console.log(factorial(0))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
