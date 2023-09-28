let y = 200;
function setup() {
  createCanvas(400, 400);
  stroke(255);
  frameRate(30);
  noLoop();
}

function draw() {
  background(0);
  y = y - 6;
  if (y < 0) {
    y = height;
  }
  line(0,y,width,y);
}
function mousePressed() {
  loop();
}