// The Nature of Code, Daniel Shiffman http://natureofcode.com


// an array of ParticleSystems
var systems = [];
var rainbow;

function setup() {
  //var text = createHTML("click to add particle systems");
  //text.position(10,365);
  canvas = createGraphics(400, 300);
  canvas.position(160, 125);
  canvas.class("puke");   //I am not sure what the .class part does
  //canvas.style("position : relative;");  //this didn't work
  rainbow = loadImage("./styles/rainbow.png");
}

function draw() {
  for(var i=0; i<systems.length; i++){
  	systems[i].addParticle();
  	systems[i].run();
  }  
 // background(255);
}

function mousePressed() {
  if (mouthopen == true){
    systems.push(new ParticleSystem(1, new PVector(mouseX,mouseY)));
    console.log('mouthopen & mousePressed')
  }
}

// function mousePressed() {
//   systems.push(new ParticleSystem(1, new PVector(mouseX,mouseY)));
// }