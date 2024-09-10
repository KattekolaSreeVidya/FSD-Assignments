//question1
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  console.log("Question 1 output"); 
  console.log(min(0, 10));   
  console.log(min(0, -10)); 
  

//question2
  function isEven(n) {
    if (n === 0) {
      return true; // Zero is even
    } else if (n === 1) {
      return false; // One is odd
    } else if (n < 0) {
      return isEven(-n); // Handle negative numbers
    } else {
      return isEven(n - 2); // Recursive case
    }
  }
  console.log("Question 2 output"); 
  console.log(isEven(50)); 
  console.log(isEven(75)); 
  console.log(isEven(-1)); 
  