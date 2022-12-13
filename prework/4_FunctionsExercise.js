// Week 1 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

/* Since the problem doesn't specify whether the string should be an input or be automatically returned whenever I call this function, I 
chose to do the latter. */

function logGreeting() {
  console.log("Hello!");
}

logGreeting(); // should log: "Hello!"

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.

/* Since the problem doesn't specify whether my name should be an input or be automatically returned whenever I call this function, I 
chose to do the latter. */

function getName() {
  return "Dana";
}

console.log(getName()); // should log: "Dana"

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

/* Based on the prompt, it's unclear whether myName() is meant to be a new function I create, and if so, what functionality it should
have, or if this is simply a typo, meant to refer to getName(). I will create a new function myName() that has the same functionality as 
getName(). */

function myName() {
  return "Dana";
}

function logGreeting2() {
  console.log(`Hello! My name is ${myName()}`);
}

logGreeting2();

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

/* Based on the prompt, I will assume that only numbers will be input, and will not consider the possibility of other data types being
input in my test cases. */ 

function sumOfThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumOfThree(1, 2, 3)); // should log: 6
console.log(sumOfThree(-1, 0, 3)); // should log: 2

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

/* Since the expression below (line 75) will be evaluated by JavaScript and return a boolean, I chose to return the result immediately 
instead of typing out an if/else conditional statement, although that is a possible alternative to solve this problem. */

function discountApplicable(age) {
  return age <= 14 || age >= 65;
}

console.log(discountApplicable(5)); // should log: true
console.log(discountApplicable(14)); // should log: true
console.log(discountApplicable(65)); // should log: true
console.log(discountApplicable(100)); // should log: true
console.log(discountApplicable(24)); // should log: false

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

function printString(num, str) {
  for (let i = num; i > 0; i--) {
    console.log(str);
  }
}

printString(3, "hello"); // should log: "hello", "hello", "hello"
printString(0, "goodbye"); // should log nothing
printString(2, ""); // should log nothing

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does
// 2. What prints out for the value of y
// 3. What prints out for the value of z
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// 1. mysteryFunction1 takes a number input and returns the result of multiplying that number by 2
// 2. The value of y is 4 (unchanged)
// 3. The value of z is 8
// Yes, I was correct

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
// 2. What prints out for the value of a
// 3. What prints out for the value of b
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

/* 1. mysteryFunction2 takes two numbers as inputs, initializes a const x and assigns it to the result of subtracting the first number by
the second number, and then returns x / that number. */
// 2. The value of a is 6
// 3. The value of b is 5
// Yes, I was correct

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items

const groceryList = "eggs,carrots,orange juice";

console.log(groceryList.split(",")); // should log: ["eggs", "carrots", "orange juice"]

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.

const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";

console.log(mySchedule.split("--->", 2)); // should log: ["wake up", "brush teeth"]

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// I found this exercise easy. I used the Chrome console to run my code. 

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
