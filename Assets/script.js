const uppercaseValues = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lowercaseValues = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ['`', '~', '!', '@', '#', '$', '%', '^']


var generateBtn = document.querySelector("#generate");

function generatePassword(){
  let passwordlength = parseInt(window.prompt('How long should this be; between 8-128'));
  console.log(passwordlength)
  let passwordArray = []

  if (passwordlength < 8) return alert ('Too Short');
  if (passwordlength > 128) return alert ('Too Lawng');
  else{
    if (!isNaN(passwordlength)){
      PL = passwordlength

      let passCharct = lowercaseValues
      console.log(passCharct)
      includeLower = confirm ('use lowercase letters?')
      if (includeLower) passCharct = lowercaseValues
      includeUpper = confirm('use uppercase')
      if (includeUpper) passCharct = passCharct.concat(uppercaseValues)
      includeNumerals = confirm('You want numbers in')
      if (includeNumerals) passCharct = passCharct.concat(numbers)
      includeSymbols = confirm('You want Symys in')
      if (includeSymbols) passCharct = passCharct.concat(symbols)

      for ( i = 0; i < PL; i++) {
        passwordArray.push(randomNum(passCharct))
      }
      console.log(passwordArray)
      return passwordArray.join('')

    }else
  
      alert('mmmm try again')
    }
  
  }


// Random Number Generator Array

function randomNum(anyArray){
  let value = Math.floor(Math.random()*anyArray.length)
  returnedValue = anyArray[value]
  return returnedValue
}






function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  





  // listen and add alert or cofirm for special xs//

  // track user pasword based on inputs from.//
  //.. i want number//

  // iterate trhough arrays loop through arrays to choose to length.//

  // incriment through array and append selecti