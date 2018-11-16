//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
var mnCount;
//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(594,841);
  angleMode(DEGREES);
}

//Rendering function
function draw() {
  //Set a background color
  background(255, 255, 0);


  // Sets time to variables for ease of use
  let hr = hour();
  let mn = minute();
  let sc = second();
  //Clock text, couldnt work out why the text disappeared if I placed after translate.
  text(hr + 'HR' + mn + 'MN',width/2 - 30, height/2);
  //Translate to ensure rotating doesn't shift all elements in draw().
  translate(width / 2, height / 2);
  //Rotate to set the clock at a clockwise tick.
  rotate(-90);

  noFill();
  strokeWeight(4);
  stroke('#000000');
  //Maps seconds up to the degrees of the full circle. 60s = a complete cycle.
  let end1 = map(sc,0,60,0,360);
  //Arc finishes when the seconds are equal to 60, which is assigned to 360 degrees above.
  arc(0,0,300,300,0,end1);



  //Attempted to create a counter for the amount of times the circle was completed.
  //console.log(sc);
}
