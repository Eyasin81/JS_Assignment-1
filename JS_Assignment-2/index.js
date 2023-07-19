
// Snippet 1 :
const add = (a, b) => {
    return a + b
  };
  
  const result1 = add(3, 4);
   console.log(result1);// 7
   // Question 1: What is the value of the result1?
  //  ans: 1 The value of the result1 is  7

  // Snippet 2 :
  const greet = (name) => {
    return {name};
  };
  const message = greet("Alice");
  console.log(message);
  
// Question 2: What is the value of the message?
// Ans:2 the value of the message is {name: "Alice"}

// Snippet 3 :
const calculateArea = (radius) => {
  const PI = 3.14159;
  const area = PI * radius * radius;
  return area;
};
const area = calculateArea(5);
console.log(area);// 78.53975

// Question 3: What is the value of area?
// Ans: 3 The value of area is 78.53975
   
// Snippet 4 :

const multiply = (a, b) => a * b;

const result2 = multiply(2, 5);
console.log(`The Value of the result is : ${result2}`); //10 
//  
// Question 4: What is the value of the result2?
//Ans: 4 The Value of the result is 10

// Snippet 5 :
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
const evenNumber = isEven(8);
console.log(`the value of evenNumber: ${evenNumber}`);
// Question 5: What is the value of evenNumber?
//Ans:5  the value of evenNumber is true


// Snippet 6 
const sayHello = () => {
  return "Hello!";
};
const hello = sayHello();
console.log(`The Value of hello is : ${hello}`);
// Question 6: What is the value of hello?
// 6 : Ans : The Value of hello is Hello!

// Snippet 7 :

const calculateSquare = (num) => num * num;

const squaredNumber = calculateSquare(4);
console.log(`the value of  squaredNumber is : ${squaredNumber}`);

// Question 7: What is the value of squaredNumber?
// 7.Ans : the value of  squaredNumber is 26


// Snippet 8 :
const divide = (a, b) => {
  if (b === 0) {
    return "Error: Division by zero."
  }
  return a / b;
}
const result3 = divide(10, 2);
const result4 = divide(8, 0);
console.log(`the values of result3 is : ${result3}`);
console.log(`the values of result3 is : ${result4}`);
// Question 8: What are the values of result3 and result4?
// Ans: the values of result3 is : 5
// Ans :the values of result3 is : Error: Division by zero


// B. Anonymous functions
// Instructions:
// 1. Create a new JavaScript file named `anonymous_functions.js`.
// 2. Write JavaScript code to solve the following tasks using anonymous functions.
// 3. Use anonymous functions where specified.
// 4. Test your code by running the file in a web browser or a JavaScript runtime environment.
// Tasks:
// 1. Create an anonymous function that takes two numbers as parameters and returns their sum.
// Example Input: 3, 5
// Example Output: 8
// 2. Create an array of numbers and use the `map()` method with an anonymous function to square each number in the array.
//  Example Input: [1, 2, 3, 4, 5]
// Example Output: [1, 4, 9, 16, 25]
// C. JavaScript arrow function 
// Instructions:
// 1. Create a JavaScript arrow function called `calculateSquare` that takes a number as input and returns the square of that number.
// 2. Call the `calculateSquare` function with the following numbers: 5, 8, and 12.
// 3. Store the results in separate variables.
// 4. Print the variables to the console to display the squares of the numbers.
// Your task is to write the JavaScript code for the above instructions.
// Tasks:
// // Step 1: Create the calculateSquare arrow function

// // Step 2: Call the calculateSquare function with different numbers

// // Step 3: Print the results to the console
