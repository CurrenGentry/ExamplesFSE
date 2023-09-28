function setup() {
  createCanvas(720, 400);
  background(230);
  strokeWeight(15);
}

function draw() {
  if (mouseIsPressed) {
    stroke(0,0,500);
  } else {
    stroke(237, 34, 93);
  }
  line(mouseX - 66, mouseY, mouseX + 66, mouseY);
  line(mouseX+66, mouseY - 66, mouseX, mouseY + 66+60);
}