var canvas;

function setup() {
  canvas = createCanvas(640,360);
  canvas.position(300, 50);
  _money = loadImage("styles/quarter.png");
  _candy = loadImage("styles/candy.png");
  _rainbow = loadImage("styles/rainbow.png");
  _puke = loadImage("styles/puke.png");
};

function draw() {
	
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