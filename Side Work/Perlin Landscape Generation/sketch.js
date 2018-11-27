//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen
var xOff = 0;
var yOff = 0.0;
//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(500, 800);

  //Set up the frame rate (frames per second)
  //Default is 60 fps
  frameRate(5);

}

//Rendering function
function draw() {

//Moves generated landscape down to create sense of sky.
  translate(0,200);
//Calls function that generates landscape.
  landscape();
  //Increments inside draw function to change values of noise, in turn
  //generating new shapes by doing so. 
  xOff += 0.05;

}


function landscape() {
  beginShape();
// Maps perlin noise values to Y coordinates.
    for (var x = 0; x <= width; x+=10) {
      var y = map(noise(xOff,yOff),0,1,0,height);

//Finds shapes generated below a point, creating a sense of distance
//between landscape colours.
      if (y > 300) {
        //y = y + 100;
        stroke(115,255,100,100);
        strokeWeight(2);
        fill(115,255,100,80);
      } else {
        //y = y + 100;
        stroke(255,201,21,100);
        strokeWeight(2);
        fill(255,201,21,50);
      }

//Creates vertex points out of generated values.
      vertex(x, y);
//Adjusts pearlin values every loop to generate new shapes.
      xOff += 0.01;
    }

//Creates a bottom line for the graph allowing it to be positioned.
    vertex(width, height);
    vertex(0, height);
  endShape();
}
