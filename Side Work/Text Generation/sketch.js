//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org
var words;//
var word;
var r;
//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(500, 500);
  frameRate(3);
  textSize(20);
  background(0);
}

//Rendering function
function draw() {
  generateText();
}

function generateText() {
  //Array setting text values that the function will pick from.
  var words = ['poon', 'tang', 'bang', 'toilet', 'bleach'];
  //Rounds random value to an integer.
  r = random(0, 4);
  var cool = round(r);
  //Selects word and places in variable.
  var word = words[cool];
  fill('#FFFFFF');
  text(word, random(0, width), random(0,height));
}
