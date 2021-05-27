//9. Turn an array of numbers into a long string of all those numbers. (use reduce)
let stringConcat = [1, 2, 3].reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue
},"");
   console.log(stringConcat); // "123"
    
    