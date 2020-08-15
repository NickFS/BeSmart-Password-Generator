// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Special characters for the function created
const specialCharacters = "!@#$%^&*()";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts that come the password generate button is clicked.
function generatePassword(){
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Would you want lower cases in your password?");

  var upperCases = confirm("Would you want upper cases in your password?");

  var special = confirm("Would you want special characters in your password?");
}



