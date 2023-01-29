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
// We declare the variable name and set it equal to the string Dane
// We create a conditional statment that returns 'Hi, Mary!' on the console if name is equal to the string Mary; any other value assigned to the variable name will return 'How do you do?' on the console
// Because the value Dane is assigned to name, which is not equal to the value Mary, the console logs 'How do you do?'
//

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
// We declare the variable secret but assign it no value.
// We declare the variable code and assign it the number 123
// we create a conditional statement that assigns secret a new value of super and multiplies the value of code by 2 if code is equal to 123, which is it is. Since this conditional is true, secret is now equal to super and code is now equal to 246.
// We create a 2nd conditional that updates the value of secret to duper if the value of code is greater than 250. It is not, so no update is made to secret, and secret remains super. 
//After both of these conditionals run, when we console.log the value of secret, the console returns super.  

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
// We delcare 3 variables: isStudent, value: true, age, value: 34, & zip, value: 5407
// We create a conditional with four possible outcomes. 
// 1. If isStudent is true & zip is greater than 8000 then the console returns You're a student on the West Coast! Since the first statment is true, but the second statment is false, nothing is returned by the console. Both statments needed to be true to fulfill the condition. We move on to the next statment. 
//2. The first else if states that if isStudent equals false, OR age is less than 30, then the console logs What are your hobbies? Since neither of these statements is true, the console logs nothing. We move on to the next statment.
//3. The second else if states if isStudent equals true then the console logs Welcome to Prime! isStudent is equal to true, so the console returns Welcome to Prime! 
//4. Satisfied, the conditional stops running. However, had  3rd statement also not be satisfied, the final statement would be evaluated as true, logging How about the weather? on the console. 


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

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - we only set colorOne to 'purple', we also need to set colorTwo to 'purple' using the same syntax as we did for colorOne 
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX - time is set as a constant, not a variable.  We need to change the line below to read let time = 4; which is the syntax for declaring a variable. 
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
// FIX - We flipflopped our console.logs. We want console.log 'enter' to follow our if statment and console.log 'no entry' to follow our else statment. 
*/

