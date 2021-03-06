//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(500,500);
  noLoop;
}


//Extended Functions Task 1, work out the smallest number in a function
var num = min(5,10);

function min(a,b) {
  if (b > a) {
    return a;
  } else {
    //If A is bigger than B, return B instead
    return b;
  }
}

console.log(num);


//Extended Functions Task 2, use input prompts and create a powers function
// Creates two input prompts and places in two variables.
var num1 = prompt("Enter a value to multiplied", "0");
var num2 = prompt("Enter power to be multipled by", "0");

//Takes two inputed numbers and calculates first number to the power of the second number.
function pow(x,n) {
  return Math.pow(x,n);
}

// Takes numbers from prompts and inputs them into function that then runs
var powRun = pow(num1, num2);

//Prints result of pow functiont to console.
console.log(powRun);
