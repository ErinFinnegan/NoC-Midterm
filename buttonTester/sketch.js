var canvas;

var _money;
var _candy;
var _rainbow;
var _puke;

function preload() {
  _money = loadImage("styles/quarter.png");
  _candy = loadImage("styles/candy.png");
  _rainbow = loadImage("styles/rainbow.png");
  _puke = loadImage("styles/puke.png");	
}

function setup() {
  canvas = createCanvas(640,360);
  canvas.position(300, 50);
};

function draw() {
	//apparently this is horrible for performance
	if(display_image === 1) {
		image(_money, 100, 50, 200, 200);
	} else if (display_image === 2) {
		image(_candy, 100, 50, 200, 200);
	} else if (display_image === 3) {
		image(_rainbow, 100, 50, 200, 200);
	} else if (display_image === 4) {
		image(_puke, 100, 50, 200, 200);
	}
};

function mousePressed(){
};