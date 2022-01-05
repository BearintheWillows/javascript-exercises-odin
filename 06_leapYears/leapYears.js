const leapYears = function(year) {
    let decision

    if (year % 4 === 0) {
        decision = true
        console.log(`${year} is divisible by 4. ${decision} is returned`)
        if (year % 100 === 0 && year % 400 != 0) {
            decision = false
            console.log(`${year} is divisible by 100. ${decision} is returned.`)
        } else {
            return true
        }
    } else {
        decision = false
        console.log(`${year} is not divisible by 4. ${decision} is returned`)
    }

    return decision
};

leapYears(1996)
leapYears(1997)
leapYears(34992)
leapYears(1900)
leapYears(1600)

// Do not edit below this line
module.exports = leapYears;
