// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// create a lowercaseChars array
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// create an uppercaseChars array
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// create a numbers array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// create a specialChars array
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "="]

// create generatePassword function
function generatePassword() {
  // prompt user for length
  var passwordLength = prompt("Please enter password length greater or equal to 8 and less than or equal to 128:")
  // error handling- is the number less than 8?
  while(passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter a number greater than or equal to 8 and less than or equal to 128")
  }
  
  // prompt user for lowercaseChars
  var isLowercase = confirm("Will your password have lower case characters?")
  // prompt user for uppercaseChars
  var isUppercase = confirm("Will your password have upper case characters?")
  // prompt user for numbers
  var isNumber = confirm("Will your password have numbers?")
  // prompt user for specialChars
  var isSpecial = confirm("Will your password have special characters?")

  if(!isLowercase && !isUppercase && !isNumber && !isSpecial){
    return generatePassword();
  }

  var generatedPassword = ""

  var chosenChars = []
  
  if(isLowercase){
    chosenChars.concat(lowercaseChars)
  }

  if(isUppercase){
    chosenChars.concat(uppercaseChars)
  }

  if(isNumber){
    chosenChars.concat(numbers)
  }

  if(isSpecial){
    chosenChars.concat(specialChars)
  }
  
  // use inputs to generate password
  while(generatedPassword.length < passwordLength){
    var index = Math.floor(Math.random * chosenChars.length)
    generatedPassword += chosenChars[index]
  }
  return generatedPassword;
  // return the password from the generatePassword function
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
