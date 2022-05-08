
function hasTargetSum(array, target) {
  //iterate through array
  for (let i = 0; i <= array.length; i++) {
    //create variable to check if the target number minus that array number is 
    //equal to another number in the array
    const numInArray = target - array[i]
    //iterate through the rest of the numbers in the array using i + 1
    for (let x = i + 1; x < array.length; x++) {
      if (numInArray === array[x]) {
        return true
      }
    }
  }
  return false
}



/* 
  Write the Big O time complexity of your function here
  O(2n)
  O(n)
*/

/* 
  Add your pseudocode here
  in function
*/

/*
  Add written explanation of your solution here
  Check if any 2 numbers of a given array is equal to the target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
