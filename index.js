// + `selectingDrivers` — This is an array containing two elements: the two functions that we previously defined (`returnFirstTwoDrivers()` and `returnLastTwoDrivers()`)ction that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If `createFareMultiplier()` receives an argument of `4`, it will return a function that takes in a fare as an argument and quadruples the fare.
// + `fareDoubler()` — Declare a variable with `const` and assign a function returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in such a way that the new `fareDoubler()` function accepts a fare as its lone argument and doubles it.
// + `fareTripler()` — Declare a variable with `const` and assign a function returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in such a way that the new `fareTripler()` function accepts a fare as its lone argument and triples it.
// + `fetchSpecifiedDrivers()` — This function takes two arguments, an array of `drivers` and either the `returnFirstTwoDrivers()` or `returnLastTwoDrivers()` function. Based on these two arguments, `fetchSpecifiedDrivers()` will return either the first two drivers or the last two drivers.

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length - 2)
}

const createFareMultiplier = function(multiplier){
  return function(fare){
    return multiplier * fare
  }
}

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};