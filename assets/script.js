// Get references to the #generate element
let generateBtn = document.querySelector('#generate'); /* This targets the id called generate , whihc is a butotn to generate a password */


let passwordText = document.querySelector('#password'); /* This is linked to the card where generated password displays on the screen */


// Array of special characters to be included in password
let specialCharacters = [
  " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
];

// Array of numeric characters to be included in password
let numericCharacters = [
  "0123456789"
];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  "abcdefghijklmnopqrstuvwxyz"
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
];

// "Storage" for how long the password will be
let optionsVariable = "";


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); /* When a user clicks on the button it will call the writepassword function whihc is the code above this */






// Write password to the #password input
function writePassword() {
  let password = generatePassword(); /* Need to create a generatePassword function for this, its being called but hasnt been defined */

  passwordText.value = password; /*This line is what puts the password on the screen */
}





// Function to generate password with user input
function generatePassword() {
  console.log("Button has been clicked!") /* A test to show button is working */




// Prevent the screen from refreshing when whe button is clicked
event.preventDefault();

// Clear previous password from screen
password.value === "";
let randomString = "";

// Function to prompt user for password options

let lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
let uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
let num = confirm("Do you want your password to contain numbers?");
let specialChar = confirm("Do you want your password to contain special characters?");
let passwordLength = prompt("Choose a password length of at least 10 characters and no more than 64 characters.");

// An if statement that checks if it's between 10 and 64 characters
if (passwordLength < 10 || passwordLength > 64) {
  alert("Your password is not between 10 characters and 64 characters. Please try again.");
  let passwordLength = prompt("Choose a password length of at least 10 characters and no more than 64 characters.");
}

// Ensure that if someone clicks cancel for all password criteria that it asks them to choose at least one
else if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
alert("You must chose at least one password criteria.");
let lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
let uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
let num = confirm("Do you want your password to contain numbers?");
let specialChar = confirm("Do you want your password to contain special characters?");
}


  // Use the criteria that are selected to generate the password
  if (lowercaseLett) {
    optionsVariable += lowerCasedCharacters;
}

if (uppercaseLett) {
    optionsVariable += upperCasedCharacters;
}

if (num) {
    optionsVariable += numericCharacters;
}

if (specialChar) {
    optionsVariable += specialCharacters;
}


  // Generates a random password based on the criteria that have been selected
  for (let i = 0; i < passwordLength; i++) {
    // Continues to select a random character value from the string until it is the desired length
    randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
}
password.value = randomString;



 return password.value; /* This was text placed as a placeholder to show where generated password should be shown once made   */

}





/* Pseudo code/ the requirements I need to meet 

-Prompt the user for the password criteria
-Promtpt for the passwrod length between 10 and 64 characters
-Prompt user whether they want to use lowercase, uppercase and/or special charcaters
-Input should be validated and make sure at least one character type is being selected
-Display the generated passwor on the page





*/