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

  // Minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;

  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCases = '':

  //Password Generator functions
  var functionArray = {
    getNumbers: function(){
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function(){
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function(){
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    }

  };

  //Check and see if the user selected ok for all and use empty minimums from above.
  if (numbers === true){
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }

  if (lowerCases === true){
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }

  if (special === true){
    minimumSpecialCases = functionArray.getSpecialCharacter();
    minimumCount++;
  }


  // Empty string for the for random character for loop
  for (let i =0; i < (parseInt(passwordLength) - minimumCount); i++){
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;
  }


}



