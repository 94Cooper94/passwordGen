// This is our call to function
document.querySelector("#generate").addEventListener("click",passwordGenerator);

// Below we declare arrays with each possible option per user preference
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "}", "]", "|", ":", ";", "'", ",", "<", ".", ">", "/", "?"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// We've established our content in the arrays. Time for user input
function passwordGenerator() {
// Here we declare our first variable. Length = desired password length.
// It's an empty string as the user will provide specifications.
  var length = (prompt("Choose a password length between 8 and 128 characters"));

  // If the user chooses an invalid length, this while loop will activate
  while(length <= 7 || length >= 129){
    alert("Password must be between 8 and 128 characters! Please try again.")
    var length = (prompt("Choose a password length between 8 and 128 characters"));
    }

    // Let user know how many characters they have
    alert(`Your password will be ${length} characters`);
  
  // This is where we declare our variables that prompt the user
  // whether they want numbers, special characters, lower or upper case.
  var cNumber = confirm("Click OK if you want numbers in your password");
  var cSpecial = confirm("Click OK if you want special characters in your password");
  var cLower = confirm("Click OK if you want lower case letters in your password");
  var cUpper = confirm("Click OK if you want upper case letters in your password");
    
  // Loop in case the user doesn't follow directions
  while(cNumber === false && cSpecial === false && cLower === false && cUpper === false) {
    alert("You must at least select one option");
    var cNumber = confirm("Click OK if you want numbers in your password");
    var cSpecial = confirm("Click OK if you want special characters in your password");
    var cLower = confirm("Click OK if you want lower case letters in your password");
    var cUpper = confirm("Click OK if you want upper case letters in your password");
  }

// This opens an empty array to store the concatinated values that the
// user elects to include in their password from the previous arrays.
  var confirmCharacters = []

  // This concatinates the password-- provides the blueprint
  function concat(confirm, arr) {
    if (confirm) {
      confirmCharacters = confirmCharacters.concat(arr);
    }
  }

// This concatinates our similar but different variable outcomes
concat(cNumber, number);
concat(cSpecial, special);
concat(cLower, lower);
concat(cUpper, upper);

// Empty string set forth to be filled with our random array
var rngPassword = ""

// The loop that cycles through each position in the array.
// Once the loop reaches the extent of length, it stops.
for (var i = 0; i < length; i++) {
  rngPassword = rngPassword + confirmCharacters[Math.floor(Math.random() * confirmCharacters.length)];
}var passwordText = document.querySelector("#password");
// Line 72 is the meat and potatoes. It cycles through and randomizes
// the password content from the previous arrays.

passwordText.value = rngPassword;
}