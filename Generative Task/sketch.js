//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org
var scale
var positionWide
var positionUp
//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
 //Sets size parameters for the circles, keeps them to scale
//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  canvas =  createCanvas(windowWidth,windowHeight); //Sets canvas size to size of user browser
  frameRate(30);
  noStroke();
}

function draw() {
customShape();
scale = random(400); //
positionWide = random(windowWidth); // Variable allows shape to remain consistent
positionUp = random(windowHeight);
}

function customShape() {
  fill(random(255),0,random(255), random(20,150));

  ellipse(positionWide, positionUp, scale, scale);
  ellipse(positionWide, positionUp, scale-40, scale/2); // Dividing keeps the scale
  fill(random(255),random(255),random(255));
  ellipse(positionWide, positionUp, scale-60, scale/4);
  fill(random(255),random(255),random(255));
  ellipse(positionWide, positionUp, scale-80, scale/6); // Randomises to edge of window
}
