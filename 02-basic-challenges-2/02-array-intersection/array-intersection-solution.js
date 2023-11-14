// Solution 1
function arrayIntersection(arr1, arr2) {
  // Declare an empty array to store the intersection
  const intersection = [];

  // Loop through arr1
  for (let i = 0; i < arr1.length; i++) {
    // If the current element is in arr2 and not already in the intersection array, add it
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }

  return intersection;
}

// Solution 2
function arrayIntersection(arr1, arr2) {
  // Create a set from arr1
  const set1 = new Set(arr1);
  // Declare an empty array to store the intersection
  const intersection = [];

  // Loop through arr2
  for (let num of arr2) {
    // If the current number is in set1, add it to the intersection array
    if (set1.has(num)) {
      intersection.push(num);
    }
  }

  return intersection;
}

// Solution 3
function findIntersection(arr1, arr2) {
  const map = {};
  const result = [];

  // Populate hash table with elements from arr1
  arr1.forEach((value) => {
    map[value] = true;
  });

  // Check each element in arr2
  arr2.forEach((value) => {
    // If the element is present in the hash table, it's an intersection
    if (map[value]) {
      result.push(value);
    }
  });

  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersection = findIntersection(array1, array2);
console.log(intersection);

module.exports = arrayIntersection;
