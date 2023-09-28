function setup() {
  createCanvas(720, 400);
}
function draw() {
  background(500,0,0);

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 10.0);
  polygon(100, 100, 100, 5);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 1.0);
  polygon(0, 100, 80, 6);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / -20);
  polygon(100, 0, 25, 23);
  pop(100);
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
