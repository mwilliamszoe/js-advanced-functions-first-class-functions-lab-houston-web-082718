//`returnFirstTwoDrivers()` — Declare a variable with `const` that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the **first** two drivers in the array.
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// `returnLastTwoDrivers()` — Declare a variable with `const` that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the **last** two drivers in the array.
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

//`createFareMultiplier()` — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If `createFareMultiplier()` receives an argument of `4`, it will return a function that takes in a fare as an argument and quadruples the fare. `fareDoubler()` — Declare a variable with `const` and assign a function returned by `createFareMultiplier()` to it. 
const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);