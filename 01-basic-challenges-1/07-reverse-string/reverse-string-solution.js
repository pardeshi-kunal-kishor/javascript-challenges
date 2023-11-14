// Solution 1

function reverseString(str) {
  // Step 1: Use the split method to convert the string into an array of characters
  var array = str.split("");

  // Step 2: Use the reverse method to reverse the array
  var reversedArray = array.reverse();

  // Step 3: Use the join method to convert the array back to a string
  var reversedString = reversedArray.join("");

  // Step 4: Return the reversed string
  return reversedString;
}

// Example usage
var originalString = "Hello, World!";
var reversedString = reverseString(originalString);
console.log(reversedString);

// Solution 2
function reverseString(str) {
  // Declare a variable to store the reversed string
  let reversed = "";

  // Loop through the string backwards
  for (let i = str.length - 1; i >= 0; i--) {
    // Add each character to the reversed string
    reversed += str[i];
  }

  // Return the reversed string
  return reversed;
}

module.exports = reverseString;
