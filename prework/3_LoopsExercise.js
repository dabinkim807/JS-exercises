// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let i = 1;
while(i <= 5) {
  console.log(i);
  i++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let i = 1; 
do {
  console.log(i);
  i++;
}
while (i <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for (let i = 1; i <= 5; i++) {
  console.log(i);
} 

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// while loop
let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

// do while loop
let i = 10;
do {
  console.log(i);
  i--;
}
while (i > 0);

// for loop
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

/* Since the prompt doesn't specify that the integers printed from 7 to 27 should be inclusive, or whether the count should increment
or decrement, I'm going to assume that the expected output should include 7 and 27, and increment based on the order the two numbers
were written. */

// while loop
let i = 7;
while (i <= 27) {
  console.log(i);
  i++;
}

// do while loop
let i = 7;
do {
  console.log(i);
  i++;
}
while (i <= 27);

// for loop
for (let i = 7; i <= 27; i++) {
  console.log(i);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

/* Since the prompt doesn't specify, and based on the example output, I'm going to assume the expected output should include the numbers
from 0 to 100, exclusive. */

// while loop
let i = 10;
while (i < 100) {
  console.log(i);
  i += 10;
}

// do while loop
let i = 10;
do {
  console.log(i);
  i += 10;
}
while (i < 100);

// for loop
for (let i = 10; i < 100; i+=10) {
  console.log(i);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

/* The original code will result in an infinite loop because counterFour will always be less than 2 and the while loop will always
meet the condition it needs to run. i.e. because it's starting from 1, decrementing by 1, without reaching a limit */

/* Since I want to stop counterFour as soon as it hits -100, I decided to write my conditional (the piece of code that will stop the
infinite loop) in the beginning of my while loop, before the console logs "HELP ME!" and counterFour is decremented */

let counterFour = 1;
while (counterFour < 2) {
  if (counterFour === -100) {
    break;
  }
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

// Since the prompt doesn't specify, I'm going to assume that the expected output should print the integers from 0 to favorite, inclusive

const favorite = 22;
for (let i = 0; i <= 22; i++) {
  console.log(i);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

/* I will be using the const favorite declared in the previous exercise, because it's still less than 100. I'm also assuming that the
expected output should print 0 to 100, inclusive, based on the example output and no explicit specifications. */

for (let i = 0; i <= 100; i++) {
  if (i === favorite) {
    console.log(`${i} my favorite number!`);
  } else {
    console.log(`${i} not my favorite number`);
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

/* The type of loop I decide to use would depend on the problem; for the most part, the for loop is the simplest, cleanest, most
efficient, and inexpensive way to iterate. It typically requires less lines of code, is easy to understand, and doesn't take up much
memory or runtime. 

However, there are specific situations where a while loop, do while loop, or recursive loop would actually make more sense to use than 
a for loop. For example, it's better to use a while loop when you don't know how many times your loop should run. Similarly, you should
use a do while loop when you don't know how many times your loop should run, but you know that it should run at least once. And recursive
loops are best used when you know you need to loop with different parameters.
*/

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

/* The exercises themselves were easy, but I found the wording of the prompts confusing and unclear, which caused me to spend a lot of 
time probably overthinking. I used the Chrome console to run my code. */

// Email your file to us or commit your file to GitHub and email us a link.
