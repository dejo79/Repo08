function randomRangeNumber (minNumber, maxNumber) {
    Math.floor(Math.random() * (max - min + 1)) + min; 

}

randomRangeNumber(minNumber, maxNumber);

module.exports = randomRangeNumber;