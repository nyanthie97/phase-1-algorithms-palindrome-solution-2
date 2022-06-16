function isPalindrome(message) {
  // Write your algorithm here
  for (let i = 0; i < message.length / 2; i++) {
    const end = message.length - 1 - i;
    if (message[i] !== message[end]) {
      
      return false;
    }
  }
  return true
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
