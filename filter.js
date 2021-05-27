//8. Given an array of numbers, return a new array that has only the numbers that are 5 or
//greater. (use filter)
var num = [3, 6, 8, 2];
var fiveAndGreaterOnly = num.filter(function (num) {
    return num > 5;
});
console.log(fiveAndGreaterOnly) /// [6, 8]

