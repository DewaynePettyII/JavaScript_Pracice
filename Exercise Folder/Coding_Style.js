// Our code must be as clean and easy to ready as possible. 
// That is actually the art of programming to take a complex task and code it in a way that is both correct and human-readable.
// A good coding style greatly assists in that. 

// Indents, 2 types: Horizontal Indents / Vertical Indents

//1. What will the following code output?
setTimeout(function() { alert(i); }, 1000 + i);
}


//2. What are the different values this might have depending on where it is used? Give an
//example for each one.


//3. Write a JavaScript program to list the properties of a JavaScript object.
//Sample object:
var student = JSON.parse('{"name" : "David Rayy", "sclass" : "VI", "rollno" : 12}')
    console.log(student)

//Sample Output: name,sclass,rollno


//4. Use JSON.stringify() to convert the object adminDetails into a JSON string.
let adminDetails = {
name: "Adam",
age: 32,
isAdmin: true,
};
let adminDetailsJSON = ;
console.log(adminDetailsJSON);


//5. For each item in this array console.log the letters in each item (use foreach)
let furniture = ['Table', 'Chairs','Couch'];

//6. For each of the exercises below, assume you are starting with the following people array.
let people = ["Greg", "Mary", "Devon", "James"];
Write the command that gives the indexOf where "Mary" is located.

//7. Make an array of numbers that are doubles of the first array. (use map)
function doubleNumbers(arr){
// your code here
}
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


//8. Given an array of numbers, return a new array that has only the numbers that are 5 or
greater. (use filter)
function fiveAndGreaterOnly(arr) {
// your code here
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


//9. Turn an array of numbers into a long string of all those numbers. (use reduce)
function stringConcat(arr) {
// your code here
}
console.log(stringConcat([1,2,3])); // "123"