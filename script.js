// Assignment Code
// Created variables and prompts
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  var chooseCharacters = prompt ("How many characters do you want between 8 and 128?");
  var chooseLower = confirm ("Do you want lowercase characters? OK - yes Cancel - no");
  var chooseUppercase = confirm ("Do you want uppercase characters? OK - yes Cancel - no");
  var chooseNumeric = confirm ("Do you want numbers? OK - yes Cancel - no");
  var chooseSpecial = confirm ("Do you want special characters? OK - yes Cancel - no");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var choiceMade = " ";


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


