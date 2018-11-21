//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen
var xOff = 0;
var yoff = 0;
var cosX;
var sinY;
var angle = 0;
var topColour = '#000000';
var bottomColour = '#000000';
var circleColour = '#DDDDDD';
var opacity = 2;
var disappear = 2;
var r = 0;
var g = 0;
var b = 0;
var a;
var c;
//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(500, 800);

//  background(0,2);
  //Set up the frame rate (frames per second)
  //Default is 60 fps
  frameRate(30);
  topColour = 255;
  b = 0; n = 0; m = 255;
}

//Rendering function
function draw() {
  background(topColour,opacity);
  //Splits page in half with two colour blocks.
  noStroke();
  fill(b,n,m,2);
  rect(0,0,width, height/0.2);
  noFill();
//Moves generated landscape down to create sense of sky.

sunmoon();
translate(0,200);
beginShape();

// Maps perlin noise values to Y coordinates.
  for (var x = 0; x <= width; x+=10) {
    var y = map(noise(xOff,yoff),0,1,0,height);
//Finds shapes generated below a point, creating a sense of distance
//between landscape colours.
    if (y > 300) {
      state = 1;
      //y = y + 100;
      stroke(115,255,100,100);
      strokeWeight(2);
      fill(115,255,100,80);
    } else {
      state = 2;
      //y = y + 100;
      stroke(255,201,21,100);
      strokeWeight(2);
    fill(255,201,21,50);
    }
//Creates vertex points out of generated values.
    vertex(x, y);
//Adjusts pearlin values every loop to generate new shapes.
    xOff += 0.05;
  }
  yoff += 0.01;

//Creates a bottom line for the graph allowing it to be positioned.
  vertex(width, height);
  vertex(0, height);
endShape(CLOSE);
  translate(0,200);
//Calls function that generates landscape.
  //landscape();


}

function sunmoon() {
  //Increments angle, making the circle move.
  angle+=0.03;
  //Creates angles from integer value (var angle).
  var cosX = cos(angle);
  var sinY = sin(angle);
  //Maps the range created by Sin and Cos and coverts them into X & Y coordinates.
  let a = map(cosX, -1, 1, 10, width-50);
  let c = map(sinY, -1, 1, 10, height-70);
  fill(r,g,b,disappear);
  //Checks position  of ball relative to top half or bottom half of the page. Changes state
  //depending on balls position on the y axis. Changes colour variables depending on argument result.
if (c >= height/2) {
  r = 0; g = 0; b = 0;
  b = 0; n = 0; m = 0;
  topColour = 0;
  noFill();
  noStroke();
  //opacity = 2;
} else {
  b = 0; n = 0; m = 255;
  fill(255,255,0);
  stroke(255,255,0);
  topColour = 255;
  //opacity = 200;
}

ellipse(20+a, 20+c, 50, 50);
}
