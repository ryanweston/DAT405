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
  background(75);

  //Set up the frame rate (frames per second)
  //Default is 60 fps
  fill(255,255,0,127);
  stroke(127, 63, 30);

  //Preferences for the text (size, and alignment)


//Loop generates 20 circles along x axis.
  for (var i=0; i < 20; i++) {
    ellipse(0, 150, 30, 30);
    translate(20,0);
  }

  ellipse(200, 200, 70, 70);
  ellipse(200, 200, 70, 30);
  ellipse(200, 200, 30, 30);


  ellipse(120, 200, 70, 70);
  ellipse(120, 200, 70, 30);
  ellipse(120, 200, 30, 30);


  translate(160, 300); //Moves shape generated below to bottom right of screen
  //Loop generates 150 circles rotated around into a circle
  for (var i=0; i < 150; i++) {
    ellipse(0, 20, 30, 90);
    rotate(PI/90);
  }

}
