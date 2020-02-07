// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

  function writePassword() {
    for(var i = 0; i < 5; i++) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    specialChar = [!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
    password5 = [];
    userChoiceChar = true;
    userChoiceSpec = true;
    userChoiceNum = true;
    userChoiceUp = true;
    userChoiceLow = true;
    var num = (Math.floor(Math.random() * 128) + 8);

    prompt("How many characters would you like your password to contain?");
    if (userChoiceChar === true) {
    console.log(num);
    }

      else {
      alert("Password must contain at least 8 characters.");
    }


      confirm("Click OK to confirm including special characters.");
      if (userChoiceSpec === true) {
      var passSpec = [Math.floor(Math.random * userChoiceSpec.length)];
      }
    }

      confirm("Click OK to confirm using numeric characters.");
      if (userChoiceNum === true) {
      var passNum = [Math.floor(Math.random * userChoiceNum.length)];
      parseInt(passNum);
      passSpec.concat(passNum);
      }

      confirm("Click OK to confirm including uppercase characters.");
      if (userChoiceUp === true) {
      var passUp = [Math.floor(Math.random * userChoiceUp.length)];
      passSpec.concat(passNum, passUp);
      }

      if (userChoiceLow === true) {
      confirm("Click OK to confirm including lowercase characters.");
      var passLow = [Math.floor(Math.random * userChoiceLow.length)];
      passSpec.concat(passNum, passUp, passLow);
      }
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);