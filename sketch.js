

function setup() {
  createCanvas(640, 360);
  noSmooth();
  fill(126);
  background(102);
  

}


function draw() {
  mousePressed = 250;
  if (mousePressed) {
    stroke(250);
  } else {
    stroke(0);
  }
  line(mouseX-66, mouseY, mouseX+66, mouseY);
  line(mouseX, mouseY-66, mouseX, mouseY+66); 
}


