// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  var chooseLower = confirm ("Do you want lowercase characters?")
  var chooseCharacters = prompt ("How many characters do you want between 8 and 128?")
  var chooseLowercase = confirm ("Do you want lowecase characters?")
  var chooseUppercase = confirm ("Do you want uppercase characters?")
  var chooseNumeric = confirm ("Do you want numbers?")
  var chooseSpecial = confirm ("Do you want special characters?")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
