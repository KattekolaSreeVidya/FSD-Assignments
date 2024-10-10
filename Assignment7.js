// Question 1: THE SUM OF RANGE
function generateRange(start, end, step = 1) {
    let arr = [];
    while (step > 0 ? start <= end : start >= end) {
        arr.push(start);
        start += step;
    }
    return arr;
}
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("Question 1: THE SUM OF RANGE");
let range1 = generateRange(1, 10);
console.log("Generated Array: ", range1);
console.log("Sum of Range: ", calculateSum(range1));

let range2 = generateRange(5, 2, -1);
console.log("Generated Array: ", range2);
console.log("Sum of Range: ", calculateSum(range2));
console.log("\n");

// Question 2: REVERSING AN ARRAY
function reverseArray(arr) {
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i]);
    }
    return res;
}
function reverseArrayInPlace(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
    return arr;
}
console.log("Question 2: REVERSING AN ARRAY");
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log("Original Array: ", myArray);

let arrayValue = [1, 2, 3, 4, 5];
console.log("Original Array: ", arrayValue);
console.log("Reversed Array In Place: ", reverseArrayInPlace(arrayValue));
console.log("\n");

// Question 3: A LIST
function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}
function listToArray(list) {
    let arr = [];
    while (list) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}
function prepend(value, list) {
    return { value: value, rest: list };
}
function nth(list, n) {
    let current = list;
    for (let i = 0; i < n; i++) {
        if (current == null) return undefined;
        current = current.rest;
    }
    return current ? current.value : undefined;
}
console.log("Question 3: A LIST");
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));