//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
var start = 0;
var positionY;
var positionX;
var scale;
var xOff=0.0;
var xIncrement=0.01;

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(400,400);
}

//Rendering function
function draw() {
  //Centers circles in middle of screen.
  positionY = height/2;
  positionX = width/2;
  //Sets size of the circles.
  scale = 200;
  background(255, 255, 0);

  //Calls custom shape to be generated.
  customShape();

  //Maps noise values to circle width parameter, circle's X position moves
  //with this value. +50 -50 keeps eye movement inside previous shapes size.
    var x = map(noise(xOff),0,1,positionX-50,positionX+50);
    ellipse(x,positionY,40,40);
    xOff+=xIncrement;
}

function customShape() {
  //Generates random colours for circles. Random opacity parameters also set.
  fill(255,random(255),random(150,255), random(75,150));
  ellipse(positionX, positionY, scale, scale);
  ellipse(positionX, positionY, scale-40, scale/2); // Dividing keeps the scale
  fill(255,random(255),random(150,255), random(75,150));
  ellipse(positionX, positionY, scale-60, scale/4);
  fill(255,255,255, random(75,150));
  ellipse(positionX, positionY, scale-80, scale/6); // White of the eye
  fill('#000000');

}
