// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'name' and set it to 'Dane' as a string variable.
// We create a condition that tests the variable 'name'. If 'name' meets the
// condition (in this case the condition is that 'name' is equal to 'Mary')
// then the console log will read 'Hi, Mary!'. But, if the condition is not
// met, meaning the variable 'name' is not equal to Mary, the console will
// log 'How do you do?'. Because the 'name' variable is equal to 'Dane',
// we would expect the console log to read 'How do you do?      describe.js:44'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'secret'. Then, we create a variable called
// 'code' and set it to the number value '123'. We then create a condition that if
// the 'code' variable is exactly equal to 123, then, secret will become
// equal to the word/string variable of 'super' and the code will get
// multiplied by 2. In this case, that condition would be met and
// the variable 'secret' would be equal to 'super' and the code would be '246'.
// After that condition is run, another condition will
// check to see if the code is a number value that is greater than 250.
// If it is greater than 250, then the variable secret will become
// the word/string variable 'duper'. In this case, the condition would not be
// met so we would not expect any of the variables to change.
// After both of these codes are run, we record (in the console log)
//the variable secret. We would expect it to read 'super        describe.js:77'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create three different variables: variable isStudent (which has been
// initially set to the boolean value of true), variable age (which has been
// set to the number value of 34), and the variable zip (which has been
// set to the number value of 55407).
// A multiple layered condition is run: if the variable isStudent is equal
// to true AND the zip code is greater than 80000, the console log will
// read 'You're a student on the West Coast!        describe.js:100'.
// If that condition is not met, then the code will check if the
// isStudent variable is equal to false OR their age variable is less than 30,
// the console log will read 'What are your hobbies?        desribe.js:105'.
// If that condition is also not met, it will check again and if the
// isStudent variable is equal to true, the console log will read
// 'Welcome to Prime!       describe.js:110'.
// If none of these conditions are met, we would expect the console log to read
// 'How about the weather?       describe.js:114'
// In the case of this actual code, the console log will read
// 'Welcome to Prime!      describe.js:114'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - the string variables for colorOne and colorTwo need to be swapped
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

// FIX - the word 'let' needs to replace the word 'const' if we want the
// variable of time to be able to be reassigned (if it is not a constant)
/*
let temp = 40;
const time = 4;

// FIX - the symbols || represents OR so they need to be changed to && to
// check for the AND function
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

// FIX - the word 'let' needs to replaced the word 'const' if we want the
// variable of minAge to be be reassigned (if it is not a constant)
/*
let age = 21;
const minAge = 21;

// FIX - instead of checking if the minAge is less than or equal to age,
// we would want it to be 'age >= minAge' to reflect checking if the age
// is greater than or equal to minAge
// FIX - I am not sure if this makes a difference, but I have usually
// seen conditional codes with 'else' on a new line after the curly bracket...
// FIX - we would need to swap the outputs in the two console.log sections
// in order to reflect the fact that the age is equal to the minAge and we want
// it to log 'enter' whereas it currently will log 'no entry'
// The code should look like this:
//
// if(age >= minAge) {
// console.log('enter');
// }
// else {
// console.log('no entry')
// }
//
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
