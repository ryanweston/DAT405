//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org
var scale;
var positionWide;
var positionUp;

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
 //Sets size parameters for the circles, keeps them to scale
//Initialization Function

function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  canvas =  createCanvas(windowWidth,windowHeight); //Sets canvas size to size of user browser
  frameRate(5);
}

function draw() {

  positionWide = random(windowWidth); // Variable allows shape to remain consistent
  positionUp = random(windowHeight);
  scale = random(200,400); //
  //Generates customShape every tick. This is because there is no background.
  customShape();
}



//Function generates the shapes for eye
function customShape() {
  //Fills ellipses with random values that have set parameters to ensure RGB
  //remains a shade of pink.
  fill(255,random(255),random(150,255), random(75,150));
  ellipse(positionWide, positionUp, scale, scale);
  ellipse(positionWide, positionUp, scale-40, scale/2); // Dividing keeps the scale
  fill(255,random(255),random(150,255), random(75,150));
  ellipse(positionWide, positionUp, scale-60, scale/4);
  fill(255,255,255, random(75,150));
  ellipse(positionWide, positionUp, scale-80, scale/6); // White of the eye (eyball)
  fill(255,random(255),random(150,255));//fill(random(255),random(255),random(255), random(75,150));
  // Pupil of the eye, randomises horizontal position between the parameters set
  ellipse(positionWide, positionUp, scale-80, scale/6); //-random(-42,42)
}
