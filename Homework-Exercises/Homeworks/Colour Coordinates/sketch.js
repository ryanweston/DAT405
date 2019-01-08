//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup(){
  createCanvas(400, 400);
}

function draw(){
  var size = 50;
  background(0);

  //Maps mouse to y & x coordinates to return colour value.
  var xLine = map(mouseX, 0, height, 0, 255);
  var yLine = map(mouseY, 0, width, 0, 255);
  var xRest = map(mouseY, 0, width, 255, 0);

  //Draws rectangle
  for (var y = 0; y < 400; y+=size) {
    for (var x = 0; x < 400; x+=size) {
      //Checks the position of the mouse on the canvas.
      if (mouseX > x && mouseY > y && mouseX < x + size && mouseY < y + size) {
        //If statement is correct, changes colour of square to e
        fill(255, 0, 0);
        rect(x, y, size, size);
      }
      //Checks the position of the mouse in terms of which row.
      else if (mouseX > x && mouseX < x + size) {
      //Sets hovered rows to blue and changes opacity to value stated above.
        fill(0, 0, 255, xLine);
        rect(x, y, size, size);
      }
      //Checks the position of the mouse in terms of which column.
      else if (mouseY > y && mouseY < y + size) {
        //Sets column to blue and changes opacity in terms of which column.
        fill(0, 0, 255, yLine);
        rect(x, y, size, size);
      }
      else{
        //Sets colour of the remaining squares to colour and opacity value defined above.
        fill(255,165,0, xRest);
        rect(x, y, size, size);
      }
    }
  }
}
