// This is where the behavior of the password generator begins.
// Choose between 8-128 characters.
// 128 is a lot of gravy, but we dont ask questions.

// Here we're declaring arrays with each possible option per user preference
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "}", "]", "|", ":", ";", "'", ",", "<", ".", ">", "/", "?"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Now we must declare the variables
var clickLength = "";
var clickNumber;
var clickSpecial;
var clickLower;
var clickUpper;

// Declaring the function and prompting user on password length
function passwordGenerator() {
  var clickLength = (prompt("Choose a password length between 8 and 128 characters"));

  // If the user chooses an invalid length, this while loop will activate
  while(clickLength <= 7 || clickLength >= 129){
    alert("Password must be between 8 and 128 characters! Please try again.")
    var clickLength = (prompt("Choose a password length between 8 and 128 characters"));
    }

    // Let user know how many characters they'll have
    alert('Your password will be ${clickLength} characters');
  
  // Get user input on other password specifications
  var clickNumber = prompt("Click OK if you want numbers in your password");
  var clickSpecial = prompt("Click OK if you want special characters in your password");
  var clickLower = prompt("Click OK if you want lower case letters in your password");
  var clickUpper = prompt("Click OK if you want upper case letters in your password");
    
    // Loop in case the user doesn't follow directions
    while(clickUpper === fase && clickLower === false && clickSpecial === false && clickNumber === false) {
      alert("You must at least select one option");
      var clickNumber = prompt("Click OK if you want numbers in your password");
      var clickSpecial = prompt("Click OK if you want special characters in your password");
      var clickLower = prompt("Click OK if you want lower case letters in your password");
      var clickUpper = prompt("Click OK if you want upper case letters in your password");
  }

    // Assign action to the password parameters we set
    var confirmCharacters = []
  
  if (clickNumbers) {
    confirmCharacters = confirmCharacters.concat(number)
  }

  if (clickSpecial) {
    confirmCharacters = confirmCharacters.concat(specialChar)
  }

  if (clickLower) {
    confirmCharacters = confirmCharacters.concat(alphaLower)
  }

  if (clickUpper) {
    confirmCharacters = confirmCharacters.concat(alphaUpper)
  }
    
    // Store our info
    console.log(confirmCharacters)

  // Empty string set forth to be filled with our random array
  var rngPassword = ""

  // The loop that cycles through each position in the array and applies math functions to randomize each value.
  for (var i = 0; i < clickLength; i++) {
    rngPassword = rngPassword + confirmCharacters[Math.floor(Math.random() * confirmCharacters.length)];
    console.log(rngPassword)
  }
  return rngPassword;
}

// This displays the password that we generate
function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}