//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org
var scale;
var positionWide;
var positionUp;
var shapeFunction;
var state = 0;

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
  frameRate(5);

}

function draw() {
//Runs shape loops, allowing "clear()" to work in keyPressed function without looping
if (state==1) {customShape();}
 else if (state==2) {customShape1();}
 else if (state==3) {customShape2();}
 else if (state==0) {drawText();}
scale = random(200,400); //
positionWide = random(windowWidth); // Variable allows shape to remain consistent
positionUp = random(windowHeight);
}


function drawText() {
  background('#000000');
  text("Hello World", height/2, width/2);
}

//Sets variabls for keys pressed, ensures the clear function does not loop alongised
function keyPressed() {
  if (key == 'q' || key == 'Q') {
    state = 1;
    clear();
    //customShape();
  }
  if (key == 'w' || key == 'W') {
    state=2;
    clear();
    //customShape1();
  }
  if (key == 'e' || key == 'E') {
    clear();
    state=3;
    //customShape2();
  }
  if (key == 'r' || key == 'R') {
    clear();
  }
}
//Function generates the shapes for eye
function customShape() {
  fill(255,random(255),random(150,255), random(75,150));
  ellipse(positionWide, positionUp, scale, scale);
  ellipse(positionWide, positionUp, scale-40, scale/2); // Dividing keeps the scale
  fill(255,random(255),random(150,255), random(75,150));
  ellipse(positionWide, positionUp, scale-60, scale/4);
  fill(255,255,255, random(75,150));
  ellipse(positionWide, positionUp, scale-80, scale/6); // White of the eye
  fill(255,random(255),random(150,255), random(75,150));//fill(random(255),random(255),random(255), random(75,150));
  // Pupil of the eye, randomises horizontal position between the parameters set
  ellipse(positionWide-30, positionUp, scale/3, scale/10); //-random(-42,42)

}

function customShape1() {
  fill('#000000');
  rect(positionWide, positionUp, 50, 50);
}
function customShape2() {
  fill('#000000');
  rect(positionWide, positionUp,100,100);
}
