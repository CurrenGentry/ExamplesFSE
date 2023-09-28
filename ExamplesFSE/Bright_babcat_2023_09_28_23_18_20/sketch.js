function setup() {
  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'Enter your name');
  greeting.position(20, 5);

  textAlign(LEFT);
  textSize(10);
}

function greet() {
  const name = input.value();
  greeting.html('What is up ' + name);
  input.value('');

  for (let i = 0; i < 400; i++) {
    push();
    fill(random(255), 10, 500);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}
