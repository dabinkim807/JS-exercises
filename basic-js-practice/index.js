/* [Challenge 1] - Convert Inches to Meters
Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.

Hint: 1 meter equals 39.3701 inches.

Results
input	value
metersToInches(0)	0
metersToInches(1)	39.3701
metersToInches(1.5)	59.05515
metersToInches(15.6)	614.17356
*/

// Runtime Complexity: O(1)
function metersToInches(meters) {
  return meters * 39.3701;
}

console.log(metersToInches(0)); // --> 0
console.log(metersToInches(1)); // --> 39.3701
console.log(metersToInches(1.5)); // --> 59.05515
console.log(metersToInches(15.6)); // -->	614.17356


/* [Challenge 2] - Loop n Times
Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times.

Results
input	value
loopThrough(0)	Nothing displayed
loopThrough(1)	Message displayed 1 time
loopThrough(3)	Message displayed 3 times
*/

// Runtime Complexity: O(n)
function loopThrough(num) {
  let i = num;
  while (i > 0) {
    console.log("Hello World");
    i--;
  }
}

loopThrough(0); // -->	Nothing displayed
loopThrough(1); // -->	Message displayed 1 time
loopThrough(3); // -->	Message displayed 3 times


/* [Challenge 3] - Number sum
Define a function called calculateSum to calculate the sum all the digits from 0 to an input number.

input	value
calculateSum(0)	0
calculateSum(1)	1
calculateSum(3)	6
calculateSum(10)	55
*/

// Runtime Complexity: O(n)
function calculateSum(num) {
  let sum = 0;
  let i = 0;
  while (i <= num) {
    sum += i;
    i++;
  }
  return sum;
}

console.log(calculateSum(0)); // -->	0
console.log(calculateSum(1)); // -->	1
console.log(calculateSum(3)); // -->	6
console.log(calculateSum(10)); // -->	55


/* [Challenge 4] - FizzBuzz
Write a function called fizzbuzz that prints each number from 1 to the input on a new line.

For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

Results
fizzbuzz(0)
Will result in the following (no) output:


fizzbuzz(16)
Will result in the following output

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
*/

// Runtime Complexity: O(n)
function fizzbuzz(num) {
  let i = 1;
  while (i <= num) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
    i++;
  }
}

fizzbuzz(0); // --> no output
fizzbuzz(16); /* --> 
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
*/


/* [Challenge 5] Calculate Factorial Number
A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.

For example, the value of 3 factorial, is 6, which can be calculated by:

3 * 2 * 1
The value of 10 factorial, for example, can be calculated by:

10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
*/

// Runtime Complexity: O(n)
function factorial(num) {
  let result = 1;
  let i = num;
  while (i > 0) {
    result *= i;
    i--;
  }
  return result;
}

console.log(factorial(3)); // --> 6
console.log(factorial(10)); // --> 3628800


/* [Challenge 6] Switch Statements
Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We 
sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

Results
sleep_in(false, false) → true

sleep_in(true, false) → false

sleep_in(false, true) → true
*/ 

// Runtime Complexity: O(1)
function sleep_in(weekday, vacation) {
  switch(true) {
    case (weekday === true && vacation === false) :
      return false;
    default:
      return true;
  }
}

console.log(sleep_in(true, true)); // --> true
console.log(sleep_in(true, false)); // --> false
console.log(sleep_in(false, true)); // --> true
console.log(sleep_in(false, false)); // --> true


/* [Challenge 7] Accessing Arrays
Write a function called common(a, b) with these criteria: Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

Results
common([1, 2, 3], [7, 3]) → True

common([1, 2, 3], [7, 3, 2]) → False

common([1, 2, 3], [1, 3]) → True
*/

// Runtime Complexity: O(1)
function common(a, b) {
  return a[0] === b[0] || a[a.length-1] === b[b.length-1];
}

console.log(common([1, 2, 3], [7, 3])); // → True
console.log(common([1, 2, 3], [7, 3, 2])); // → False
console.log(common([1, 2, 3], [1, 3])); // → True


/* [Challenge 8] Object Keys and Values
Create an object with two key-value pairs.

Log that object to the console.

Delete the first key-value pair in the object.

Log that object to the console again. The first key-value pair should be gone.
*/ 

// Runtime Complexity: O(1)
const obj = {
  a: 1,
  b: 2
};

console.log(obj);
delete obj.a;
console.log(obj);


/* [Challenge 9] Mutating Objects
Create an array of objects with at least 2 key value pairs. The objects should all have the same keys, and the array should contain at least 3 objects.

Create a function that accepts the array of objects as an argument.

Print the value of the second key in each object to the console. Use dot-notation to access the values.

After printing the values in step 3, change the values of the second key in every object to something new.

Prove the change worked by printing the second key in each object to the console, which should show the new value. Use bracket-notation to access the values this time.
*/ 

// Runtime Complexity: O(n)
const drinkPoll = [
  {
    coffee: 1,
    tea: 2
  },
  {
    coffee: 3,
    tea: 4
  },
  {
    coffee: 5,
    tea: 6
  }
];

function mutateDrinkPoll(poll) {
  for (let i = 0; i < poll.length; i++) {
    console.log(`original: ${poll[i].tea}`);
    poll[i].tea++;
    console.log(`new: ${poll[i]["tea"]}`);
  }
}

mutateDrinkPoll(drinkPoll); // --> 2, 4, 6 (before change) --> 3, 5, 7 (after change)

/* [Challenge 10] Determine Runtime Complexity
At the top your document for each challenge, state the runtime complexity for that function.
*/ 