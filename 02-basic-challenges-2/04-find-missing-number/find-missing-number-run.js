const findMissingNumber = require("./find-missing-number");

const result = findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1]);

console.log(result);

function findMissingNumber(arr) {
  // Calculate the expected sum of the sequence
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of the array
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  // The missing number is the difference between the expected and actual sum
  const missingNumber = expectedSum - actualSum;

  return missingNumber;
}

// Example usage
const numbers = [1, 2, 4, 5, 6];
const missingNumber = findMissingNumber(numbers);

console.log("Missing number:", missingNumber);
