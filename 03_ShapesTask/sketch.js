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

  //Set up the frame rate (frames per second)
  //Default is 60 fps
  fill(255,255,0);
  stroke(127, 63, 30);

  //Preferences for the text (size, and alignment)


  stroke(0,250,0); //green
  strokeWeight(4);
  line(25, 25, 695, 375);

  stroke(250, 0, 250);
  line(695, 25, 695, 375);

  stroke(150,250,150);
  line(25, 375, 695, 375);

  stroke(250, 250, 0);
  line(695, 25, 25, 375);

  stroke(250, 125, 0); //orange
  line(25, 25, 695, 25);

  stroke(150, 250, 250);
  line(25, 375, 25, 25);

  noStroke();

  fill (5, 150, 250)
  ellipse(25, 25, 50, 50);

  fill (250, 50, 50)
  ellipse(695, 25, 50, 50);

  fill (50, 250, 50)
  ellipse(25, 375, 50, 50);

  fill (250, 250, 0)
  ellipse(695, 375, 50, 50);





}
