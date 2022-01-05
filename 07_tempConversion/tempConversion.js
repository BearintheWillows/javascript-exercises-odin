const ftoc = function(fahrenheit) {
 
  let celcius = (fahrenheit - 32) * (5 / 9)
  if (celcius === 0) {
    return celcius
  } else {
  if (Number(celcius) === celcius && celcius % 1 !== 0) {
    return parseFloat(celcius.toFixed(1))
  
  }}

  
}

const ctof = function(celcius) {
    let farenheit = (celcius * (9/5) + 32)
    console.log(farenheit)
    if (Number(farenheit) === farenheit && farenheit % 1 !== 0) {
      return parseFloat(farenheit.toFixed(1))
    } else {
      return farenheit
    }
    
  }

ctof(-10)
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
}
