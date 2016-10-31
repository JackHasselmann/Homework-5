var randomShape = [];


function setup() {
  createCanvas(640, 360);
  noSmooth();
  fill(126);
  background(102);
  

randomShape.push(ellipse(random ,random ,random,random));
  randomShape.push(ellipse(random ,random ,random,random));
  randomShape.push(ellipse(random ,random ,random,random));
  randomShape.push(ellipse(random ,random ,random,random));
  randomShape.push(ellipse(random ,random ,random,random));
  randomShape.push(ellipse(random ,random ,random,random));
  randomShape.push(ellipse(random ,random ,random,random));
  randomShape.push(ellipse(random ,random ,random,random));



}


function draw() {
 
 for(var i = 0; i < randomShape.length; i++){
    text(randomShape[i], random(width), random(height));
  
  mousePressed = 250;
  if (mousePressed) {
    stroke(250);
  } else {
    noStroke();
  }
 }
  line(mouseX-66, mouseY, mouseX+66, mouseY);
  line(mouseX, mouseY-66, mouseX, mouseY+66); 
}


