//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

var cosX;
var sinY;
var angle = 0;
var topColour = '#FFFFFF';
var bottomColour = '#000000';
var circleColour = '#DDDDDD';

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(500, 500);
}

//Rendering function
function draw() {
  background(topColour);
  //Splits page in half with two colour blocks.
  fill(bottomColour);
  rect(0,height/2,width, height/2);
  //Call function that generates the moving circle.
  sunmoon();
}

function sunmoon() {
  //Increments angle, making the circle move. 
  angle+=0.1;
  //Creates angles from integer value (var angle).
  var cosX = cos(angle);
  var sinY = sin(angle);
  //Maps the range created by Sin and Cos and coverts them into X & Y coordinates.
  let x = map(cosX, -1, 1, 0, width-50);
  let y = map(sinY, -1, 1, 0, height-50);
  fill(circleColour);
  ellipse(20+x, 20+y, 70, 70);


  //Checks position  of ball relative to top half or bottom half of the page. Changes state
  //depending on balls position on the y axis. Changes colour variables depending on argument result.
  if (y >= height/2) {
    topColour = '#000000';
    bottomColour = '#FFFFFF';
    circleColour = '#DDDDDD';
  } else {
    topColour = '#FFFFFF';
    bottomColour = '#000000';
    circleColour = '#DDDDDD';
  }
}
