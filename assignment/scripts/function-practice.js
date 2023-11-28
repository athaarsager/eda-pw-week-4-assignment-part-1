console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log("Test - should say 'Hello, Andrew!'", helloName("Andrew"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}

console.log("Test - should return 12", addNumbers(4, 8));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}

console.log("Test - should return 24", multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log("Test - should return true", isPositive(5));
console.log("Test - should return false", isPositive(-9001));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array.pop();
}
const fullArray = ["thing1", "thing2", "we don't talk about thing3"];
let emptyArray = [];
let extraArray = ["item1", "thing2", "object3", "some fourth generic noun"];

console.log("Test - should return 'we don't talk about thing3'", getLast(fullArray));
console.log("Test - should return 'undefined'", getLast(emptyArray));
console.log("Test - should return 'some fourth generic noun'", getLast(extraArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

fullArray.push("we don't talk about thing3");

function find(value, array) {
  let answer = false;
  for (let item of array) {
    if (item === value) {
      answer = true;
    }//end of if
  }//end of for
  return answer;
}//end of function

console.log("Test - should return true", find("thing2", fullArray));
console.log("Test - should return false", find("thing4", fullArray));
console.log("Test - should return true", find("thing2", extraArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let newArray = string.split("");
  return newArray[0] === letter ? true : false;
}
console.log("Test - should return true", isFirstLetter("E", "EDA"));
console.log("Test - should return false", isFirstLetter("y", "Emerging"));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (num of array) {
    sum += num;
  }
  return sum;
  // TODO: return the sum
}

let numbersArray = [4, 8, 15, 16, 23, 42];
let otherNumberArray = [-5, 0, 3.141592653589793238462643383279, -900, 116];

console.log("Test - should return 108", sumAll(numbersArray));
console.log("Test - should return arround -785.858", sumAll(otherNumberArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let anotherNumberArray = [-4, -8, -15, -16, -23, -42];
let finalNumberArray = [1, -5, 4.378, -9.991, -63, -9000, 7];

function allPositive(array) {
  let positiveArray = [];
  //debugger;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveArray = positiveArray.concat(array.slice(i, i + 1));
    }
  }
  return positiveArray;
}

console.log("Test - should return [0, 3.141592653589793238462643383279, 116]", allPositive(otherNumberArray));
//return result slightly different than console.log due to rounding
console.log("Test - should return an empty array", allPositive(anotherNumberArray));
console.log("Test - should return [1, 4.378, 7]", allPositive(finalNumberArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//     Problem: Is it Time for Milk and Cookies?
//     Create a function that accepts a Date object and returns true if it is Christmas Eve
//     and false otherwise. So that we know if it's time to set out milk and cookies for Santa!

const today = new Date();
const tomorrow = new Date(2023, 10, 29);
const thisChristmasEve = new Date(2023, 11, 24);

function timeForMilkAndCookies(date) {

}

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
