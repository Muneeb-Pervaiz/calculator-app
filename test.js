const add = require('./app');
1
i2f (add(2, 3) !== 5) {
  throw new Error("Test Failed!");
}

console.log("Test Passed!");
