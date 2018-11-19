var speedX = 5;
var speedY = 5;
var radius = 50;
var x = 200;
var y = 200;
//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(800,600);

}

//Rendering function
function draw() {
  //Set a background color
  background(255, 255, 0);

  x = x + speedX;
  y = y + speedY;

  if ((x+radius > width) || (x-radius < 0)) {
    speedX = speedX * -1;
  }
  if ((y+radius > height) || (y-radius < 0)) {
    speedY = speedY * -1;
  }

  stroke('#000000');
  strokeWeight(3);
  noFill();
  ellipse(x, y,radius*2,radius*2);
  console.log(x);
}
