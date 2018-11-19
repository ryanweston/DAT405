//Sets speed for the ball, pixels travelled on each tick.
var speedX = 5;
var speedY = 5;
//Sets size of the ball, half of actual circle size.
var radius = 50;
//Starting position of the ball. Cannot be less than circle size.
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

  //Moves ball, adds distance per tick to original position of ball.
  x = x + speedX;
  y = y + speedY;

  //Check Y & X position of ball and changes speed accordingly. Negative speed
  //changes direction of the ball. Radius adds hitbox for the ball.
  if ((x+radius > width) || (x-radius < 0)) {
    speedX = speedX * -1;
  }
  if ((y+radius > height) || (y-radius < 0)) {
    speedY = speedY * -1;
  }

  //Circle styling and draws circle. 
  stroke('#000000');
  strokeWeight(3);
  noFill();
  ellipse(x, y,radius*2,radius*2);
  console.log(x);
}
