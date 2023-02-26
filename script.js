// Assignment Code
// Created variables 
var generateBtn = document.querySelector("#generate");

var lowercase = "qwertyuioplkjhgfdsazxcvbnm"; 
var uppercase = "QWERTYUIOPLKJHGFDSAZXCVBNM"; 
var numbers = "1234567890"; 
var characters = "~!@#$%^&*()"; 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// created prompts and responses to answers to the prompts
function generatePassword () {
  var chooseCharacterSize = prompt ("How many characters do you want between 8 and 128?");
  alert('You chose ' + chooseCharacterSize + ' characters!');
  var chooseLower = confirm ("Do you want lowercase characters? OK - yes Cancel - no");
  if(chooseLower == true ) {
    alert ("You chose lowercase");
    lowercase;
  } else {
    alert ("You did not choose lowercase");
    lowercase;
  }
  var chooseUppercase = confirm ("Do you want uppercase characters? OK - yes Cancel - no");
  if(chooseUppercase == true ) {
    alert ("You chose uppercase");
    uppercase;
  } else {
    alert ("You did not choose uppercase");
    uppercase;
  }
  var chooseNumbers = confirm ("Do you want numbers? OK - yes Cancel - no");
  if(chooseNumbers == true ) {
    alert ("You chose numbers");
    numbers;
  } else {
    alert ("You did not choose numbers");
    numbers;
  }
  var chooseSpecial = confirm ("Do you want special characters? OK - yes Cancel - no");
  if(chooseSpecial == true ) {
    alert ("You chose special characters");
    characters;
  } else {
    alert ("You did not choose special characters");
    characters;
  }
  if (chooseSpecial === false && chooseLower === false && chooseUppercase === false && chooseNumbers === false) {
    alert('You need to select at least one option.');
    return '';
 
}}
var answerResponse =''.concat (lowercase, uppercase, numbers, characters);
var chooseAnswers = "";

for (var i = 0; i < chooseCharacterSize; i++) {
  var randomAns = Math.floor(Math.random() * answerResponse.length);
  chooseAnswers += answerResponse.substring(randomAns, randomAns+1);
}

return chooseAnswers;


