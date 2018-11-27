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
  frameRate(15);

}

function draw() {
//Runs shape loops, allowing "clear()" to work in keyPressed function without looping
//If statement checks for state changes that are changed within keyPressed function and
//generates different shapes respectively.
if (state==1) {customShape();}
 else if (state==2) {customShape1();}
 else if (state==3) {customShape2();}
 else if (state==0) {drawText();}
scale = random(200,400); //Sets scale for custom shapes to use.
positionWide = random(windowWidth); //Random X variable for shapes.
positionUp = random(windowHeight);  //Random Y variable for shapes.
}

//Sets background and places instructions on screen if state is equal to 0.
function drawText() {
  background('#000000');
  //Sets colour of text.
  fill('#FFFFFF');
  //Width -200 to place in center of screen, make up for width of text.
  text("PRESS Q, W OR E TO GENERATE SHAPES. PRESS R TO CLEAR.", width/2-200, height/2);
}

//Changes state variabled depending on buttom pressed. Also clears canvas when pressed.
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

//Generates half circles with random X, Y coordinates and stroke weight/colours.
function customShape1() {
    fill(255);
    stroke(random(0,255),random(0,255), random(0,255));
    strokeWeight(random(1,5));
    arc(positionWide, positionUp, 280, 280, PI, TWO_PI);
}

//Generates edgy black and white squares.
function customShape2() {
    //colour for first square
    fill('#000000');
    //picks random value between 0-45 to rotate squares.
    rotate(random(0,45));
    rect(positionWide, positionUp,100,100);
    //smaller white squares layered on top of black square.
    strokeWeight(2);
    stroke(255,255,255);
    rect(positionWide+22, positionUp+22,80,80)
    rect(positionWide+28, positionUp+28,75,75);

}
