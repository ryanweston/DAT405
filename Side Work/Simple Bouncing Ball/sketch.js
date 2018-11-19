//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
var x=0;
var speed = 2;
var radius = 50;
//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(800,800);
}

//Rendering function
function draw() {
  //Set a background color
  background(255, 255, 0);
  stroke('#000000');
  strokeWeight(3);
  noFill();
  ellipse(x, 400,radius*2,radius*2);
  x += speed;
  if (x+radius == 800) {
    speed = -2;
  } else if (x-radius == 0) {
    speed = 2;
  }
  console.log(x);
}
