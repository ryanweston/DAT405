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
  fill(215,200,170);
  for (let y = 0; y < 10; y++){
  for (let x = 0; x < 10; x++) {
  rect(x*size, y*size, size, size);

  fill(random(255), random(255), random(255));
  rect((x*size)+12, (y*size)+12, size2, size2);
    }
  }


}
