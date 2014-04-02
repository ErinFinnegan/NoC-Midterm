// The Nature of Code, Daniel Shiffman http://natureofcode.com


// an array of ParticleSystems
var systems = [];
var rainbow;
var mouthopen;

function setup() {
  //var text = createHTML("click to add particle systems");
  //text.position(10,365);
  canvas = createCanvas(400, 300);
  canvas.position(160, 125);
  canvas.class("puke");   //I am not sure what the .class part does
  //canvas.style("position : relative;");  //this didn't work
  rainbow = loadImage("../styles/rainbow.png");
  mouthopen == false;
}

function draw() {
  for(var i=0; i<systems.length; i++){
  	systems[i].addParticle();
  	systems[i].run();
  }  
  if (mouthopen == true){
    mouthWasOpen();
  }
 // background(255);
}

function mouthWasOpen() {
    //map(value, start1, stop1, start2, stop2)
    var newbottomlip = map(bottomlip, 190, 285, 0, 400);
    systems.push(new ParticleSystem(1, new PVector((mouthX),newbottomlip)));
    //console.log('made it to the mouthWasOpen function');
    console.log('newbottomlip ' + bottomlip);
}

function mousePressed() {
  console.log("mouse pressed!");
  console.log('mouseX, mouthX when clicked' + mouseX + ',' + mouthX);
}