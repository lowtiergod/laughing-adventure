// function generates the password
var newPassword = function(length, uppercase, lowercase, numbers, symbols) {
  var combo = "";

  var totalCharacters = "";

  // if uppercase parameter is true, create a variable called uppercase and assign uppercase characters
  if (uppercase === true) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    totalCharacters += uppercase;
  }
  // if lowercase parameter is true, create a variable called uppercase and assing lowercase characters
  if (lowercase === true)  {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    totalCharacters += lowercase;
  }
  // if numbers parameter is true, create a variable called numbers and assign numbers to it
  if (numbers === true) {
    var numbers = "0123456789";
    totalCharacters += numbers;
  }
  // if symbols parameter is true, create a variable called symbols and assign symbols to it
  if (symbols === true) {
    var symbols = "!@#$%^&*";
    totalCharacters += symbols;
  }

  for (i = 0; i < length; i++) {
    // find a random character out of the string totalCharacters and add it to combo variable
    combo += totalCharacters.charAt(Math.floor(Math.random() * totalCharacters.length));
  }

  return combo;

}

var generateBtn = document.querySelector("#generate");

function generatePassword() {
 var charLength = prompt("Please enter a character length for your password between 8 and 128 charcters.");
 if (charLength < 8 || charLength > 128) {
   window.confirm("Character length must be between 8 and 128.");
   return generatePassword();
 }

 // ask the user to confirm password criteria to include in the password
 var conUpper = window.confirm("Would you like to include uppercase characters in your password?");
 var conLower = window.confirm("Would you like to include lowercase characters in your password?");
 var numbers = window.confirm("Would you like to include numbers in your passwords?");
 var symbols = window.confirm("Would you like to include symbols in your password?");

 // calls the password function that generates a random password and assign it to variable password
 var password = newPassword(charLength, conUpper, conLower, numbers, symbols);

 return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


