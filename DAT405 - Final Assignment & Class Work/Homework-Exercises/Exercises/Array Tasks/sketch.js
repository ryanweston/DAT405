var cars;
var x;
//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(400, 400);

  //Set up the frame rate (frames per second)
  //Default is 60 fps

}

//Rendering function
function draw() {
  //Task 1: Get the Volvo value from the cars array. X variable fetches 2nd value from array.
  var cars = ["Saab","Volvo","BMW"];
  var x = cars[1];
  //Prints value of X variable to console.
  console.log(x);
  //Task 2: Change the first item of cars to Ford. Changes value of first array
  //string and prints in console.
  cars[0] = "Ford";
  console.log(cars[0]);
  //Task 3: Alert the number of items in an array using the correct array method.
  //Generates an alert, stating length of cars array.
  alert(cars.length);
  noLoop();
}
