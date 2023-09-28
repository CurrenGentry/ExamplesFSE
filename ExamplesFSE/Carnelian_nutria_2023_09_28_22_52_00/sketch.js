function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background(0);
  noStroke();

  fill(0,0,500);
  triangle(18, 18, 500, 360, 81, 360);

  fill(102,10,20);
  rect(81, 81, 63, 63);

  fill(204,400,20);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill(500,10,10);
  ellipse(400, 200, 72, 72);

  fill(204,10,23);
  triangle(100, 200, 351, 400, 240, 360);

  fill(500,400,100);
  arc(600, 300, 200, 280, PI, TWO_PI);
}