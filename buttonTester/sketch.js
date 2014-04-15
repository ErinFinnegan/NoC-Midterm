var candy;
var canvas;

function setup() {
  canvas = createCanvas(640,360);
  canvas.position(300, 50);
  candy = loadImage("styles/candy.png");


};

function draw() {

  image(candy, 100, 50, 200, 200);
  // background(155);
};
