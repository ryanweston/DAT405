//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
var circleNumber = 200;
var rotateValue = 0;
//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(windowWidth,windowHeight);
  background(0);
  positionWidth = windowWidth;
  positionHeight = windowHeight;
  frameRate(100);
}

//Rendering function
function draw() {
  //Randomises X & Y values for ellipses.
  rX = random(0,positionWidth);
  rY = random(0,positionHeight);
  //Creates two scales randomizing sizes for the circles.
  rScale = random(20,100);
  rScale2 = random(20,100);

  //Rotates depending on value, 0 default, random when mousePressed.
  rotate(rotateValue);
  for(var i = 0; i < circleNumber; i++) {
    //Push & pull to sort out translate and rotate to ellipse.
    push();
    noFill();
    //Random stroke weight, colour and randomly translates
    strokeWeight(random(1,7));
    translate(random(1,50));
    stroke(random(0,255),random(0,255),random(0,255));
    ellipse(rX,rY, rScale, rScale2);
    pop();
  }
}
//Checks if mouse is pressed and
function mousePressed(){
    var rotateValue = rotate(random(2*PI));
}
