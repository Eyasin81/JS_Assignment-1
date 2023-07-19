
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

var fun=function(a,b){
    return a+b;
}
console.log(fun(3,5))


let arr = [1,2,3,4,5];
let newArr = arr.map(function (value) {
	return value * value
})
console.log(newArr)


// C. JavaScript arrow function 
// Instructions:
// 1. Create a JavaScript arrow function called `calculateSquare` that takes a number as input and returns the square of that number.
// 2. Call the `calculateSquare` function with the following numbers: 5, 8, and 12.
// 3. Store the results in separate variables.
// 4. Print the variables to the console to display the squares of the numbers.
// Your task is to write the JavaScript code for the above instructions.
// Tasks:
// Step 1: Create the calculateSquare arrow function
// Step 2: Call the calculateSquare function with different numbers
// Step 3: Print the results to the console

