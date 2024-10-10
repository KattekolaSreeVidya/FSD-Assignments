// Question 1. Flattening using reduce and concat
let arrays = [[1, 2, 3], [4, 5], [6]];
let flattenedArray = arrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);
console.log("Flattened Array:", flattenedArray); 

// Question 2. Your Own Loop
function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}
console.log("Loop Output:");
loop(3, n => n > 0, n => n - 1, console.log);


// Question 3. Every Function using Loop
function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}
console.log("Every Function Output:");
console.log(every([1, 3, 5], n => n < 10)); 
console.log(every([2, 4, 16], n => n < 10)); 
console.log(every([], n => n < 10)); 