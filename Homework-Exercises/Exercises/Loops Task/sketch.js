//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
let size = 50;
let size2 = 25;


function setup() {
  createCanvas(501,501);
  frameRate(3);
}

function draw() {
  //Loop that increments values of x & y to generate 10x10 grid.
  for (let y = 0; y < 10; y++){
  for (let x = 0; x < 10; x++) {
  //Draws the squares using values generated by loop, multiplied X and Y
  //to position squares next to each other.
  rect(x*size, y*size, size, size);

  //Generates random colours for smaller squares to display.
  fill(random(255), random(255), random(255));
  //Draws smaller squares within bigger ones defined earlier, added 12 to X & Y
  //to center them.
  rect((x*size)+12, (y*size)+12, size2, size2);
    }
  }


}