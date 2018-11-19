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
  //Task 1: Get the Volvo value from the cars array.
  var cars = ["Saab","Volvo","BMW"];
  var x = cars[1];
  console.log(x);
  //Task 2: Change the first item of cars to Ford.
  cars[0] = "Ford";
  console.log(cars[0]);
  //Task 3: Alert the number of items in an array using the correct array method.
  alert(cars.length);
  noLoop();
}
