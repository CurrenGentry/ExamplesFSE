function setup() {
  createCanvas(720, 400);
  background(0);
  stroke(153);
  strokeWeight(4);
  strokeCap(SQUARE);

  let a = 350;
  let b = 200;
  let c = 20;

  line(a, b, a + c, b);
  line(a, b + 10, a + c, b + 10);
  line(a, b + 20, a + c, b + 20);
  line(a, b + 30, a + c, b + 30);

  a = a + b * c;
  b = height - b;

  line(a, b, a + c, b);
  line(a, b + 10, a + c, b + 10);
  line(a, b + 20, a + c, b + 20);
  line(a, b + 30, a + c, b + 30);

  a = a + a;
  b = height - c;

  line(a, b, a + c, b);
  line(a, b + 10, a + c, b + 10);
  line(a, b + 20, a + c, b + 20);
  line(a, b + 30, a + c, b + 30);
}