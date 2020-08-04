// This is where the behavior of the password generator begins.

// Here, we give life to the 'generate' button and tie it to our function
document.querySelector("#generate").addEventListener("click", writePassword);

// Below we declare arrays with each possible option per user preference
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

    // Let user know how many characters they have
    alert(`Your password will be ${clickLength} characters`);
  
  // Get user input on other password specifications
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

    // Assign action to the password parameters we set
    var confirmCharacters = []
  
  if (clickNumber) {
    confirmCharacters = confirmCharacters.concat(number)
  }

  if (clickSpecial) {
    confirmCharacters = confirmCharacters.concat(special)
  }

  if (clickLower) {
    confirmCharacters = confirmCharacters.concat(lower)
  }

  if (clickUpper) {
    confirmCharacters = confirmCharacters.concat(upper)
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
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Overall referenced a repository found on Github belonging to Tiffany Casey
// I understand the premise and am utilizing external resources
// to better understand how to think and formulate thoughts logically,
// like a computer.