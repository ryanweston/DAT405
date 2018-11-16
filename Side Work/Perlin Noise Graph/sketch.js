//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
var start = 0;
//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK");
  createCanvas(800,800);
}

//Rendering function
function draw() {
  //Set a background color
background(100);
var xVar = start;

beginShape();
for (var x = 0; x < width; x++) {
  var y = map(noise(xVar),0,1,0,height);
  var colour = map(y, 0, 800, 0, 255);
  fill(colour);
  strokeWeight(3);
  vertex (x, y);
  xVar += 0.01;
}

endShape();
start += 0.01;


}
