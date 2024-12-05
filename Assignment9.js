
// // let numbers = [1, 2, 3, 4];
// // let squares = numbers.map(num => num * num);
// // console.log(squares); // Output: [1, 4, 9, 16]


// // let names = ["Alice", "Bob", "Charlie"];
// // let greetings = names.map(name => "Hello, " + name + "!");
// // console.log(greetings); // Output: ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]



// // let words = ["read", "write", "code"];
// // let actionWords = words.map(word => word + "ing");
// // console.log(actionWords); // Output: ["reading", "writing", "coding"]




// // let numbers = [1, 2, 3, 4];
// // let sum = numbers.reduce((acc, num) => acc + num, 0);
// // console.log(sum); // Output: 10


// // let words = ["apple", "banana", "cherry"];
// // let longestWord = words.reduce((longest, word) => {
// //     return word.length > longest.length ? word : longest;
// // }, "");
// // console.log(longestWord); // Output: "banana"


// // let words = ["hello", "world"];
// // let totalCharacters = words.reduce((acc, word) => acc + word.length, 0);
// // console.log(totalCharacters); // Output: 10


// // let numbers = [1, 2, 3, 4, 5, 6];
// // let evenNumbers = numbers.filter(num => num % 2 === 0);
// // console.log(evenNumbers); // Output: [2, 4, 6]

// // let words = ["cat", "elephant", "dog", "rabbit"];
// // let longWords = words.filter(word => word.length > 4);
// // console.log(longWords); // Output: ["elephant", "rabbit"]


// // let numbers = [-1, 0, 3, -7, 5];
// // let positiveNumbers = numbers.filter(num => num > 0);
// // console.log(positiveNumbers); // Output: [3, 5]

// let numbers = [10, 20, 30, 40];
// let increasedNumbers = numbers.map(num => num + 5);
// console.log(increasedNumbers); // Output: [15, 25, 35, 45]


// // let numbers = [1, 2, 3, 4, 5, 6];
// // let evenNumbers = numbers.filter(num => num % 2 === 0);
// // console.log(evenNumbers); // Output: [2, 4, 6]


// // let words = ["cat", "elephant", "dog", "rabbit"];
// // let longWords = words.filter(word => word.length > 4);
// // console.log(longWords); // Output: ["elephant", "rabbit"]



// // let numbers = [-1, 0, 3, -7, 5];
// // let positiveNumbers = numbers.filter(num => num > 0);
// // console.log(positiveNumbers); // Output: [3, 5]




// let numbers = [10, 50, 25, 80, 45];
// let maxNumber = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);
// console.log(maxNumber); // Output: 80


// let numbers = [10, 20, 30, 40, 50];
// let average = numbers.reduce((acc, num, _, array) => acc + num / array.length, 0);
// console.log(average); // Output: 30


// let numbers = [1, 2, 3, 4, 5];
// let count = numbers.reduce((acc, num) => acc + 1, 0);
// console.log(count); // Output: 5


// let words = ["This", "is", "a", "sentence"];
// let sentence = words.reduce((acc, word) => acc + " " + word);
// console.log(sentence); // Output: "This is a sentence"



// let words = ["apple", "banana", "cherry", "date"];
// let wordsWithA = words.filter(word => word.includes('a'));
// console.log(wordsWithA); // Output: ["apple", "banana", "date"]

let numbers = [-1, -5, 3, 7, -2];
let nonNegativeNumbers = numbers.filter(num => num >= 0);
console.log(nonNegativeNumbers); // Output: [3, 7]



// let numbers = [3, 5, 9, 12, 14];
// let divisibleByThree = numbers.filter(num => num % 3 === 0);
// console.log(divisibleByThree); // Output: [3, 9, 12]
