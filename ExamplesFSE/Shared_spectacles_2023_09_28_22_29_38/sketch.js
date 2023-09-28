function setup() {
  
  createCanvas(400, 400);
}

function draw() {
  
  background(200,10,10);
  noFill();

  
  stroke(200);
  point(width * 0.5, height * 0.5);
  point(width * 0.5, height * 0.25);

 
  stroke(0, 120,210);
  line(0, height * 0.33, width * 10, height * 0.33);

  
  stroke(255, 153, 0);
  rect(width * 0.25, height * 0.4, width * 0.5, height * 0.8);
}