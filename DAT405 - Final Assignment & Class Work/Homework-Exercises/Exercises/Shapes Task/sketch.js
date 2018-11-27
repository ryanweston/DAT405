//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(720, 400);
  background(100);
}

function draw() {
  //Sets styles
  fill(255,255,0);
  stroke(127, 63, 30);
  strokeWeight(4);

  stroke(0,250,0); //green
  line(25, 25, 695, 375); //line top left to bottom right

  stroke(250, 0, 250); //pink
  line(695, 25, 695, 375); //line top right to bottom right

  stroke(150,250,150); //light green
  line(25, 375, 695, 375); //line from bottom left to bottom right

  stroke(250, 250, 0); //yellow
  line(695, 25, 25, 375); //bottom left to top right

  stroke(250, 125, 0); //orange
  line(25, 25, 695, 25); //line top left to top right

  stroke(150, 250, 250); //blue
  line(25, 375, 25, 25); //top left to bottom left

  noStroke();

  //Draws circles in each of the 4 corners of canvas. Subtracted, size of shape (50)
  //to allow it to appear completely on the canvas. Could be done in a more efficient manner.
  fill (5, 150, 250)
  ellipse(25, 25, 50, 50); //Blue circle, top left.

  fill (250, 50, 50)
  ellipse(695, 25, 50, 50); //Red circle, top right.

  fill (50, 250, 50)
  ellipse(25, 375, 50, 50); //Green circle, bottom left.

  fill (250, 250, 0)
  ellipse(695, 375, 50, 50); //Yellow circle, bottom right.

}
