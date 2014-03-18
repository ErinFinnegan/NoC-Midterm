// The Nature of Code, Daniel Shiffman http://natureofcode.com


// an array of ParticleSystems
var systems = [];

function setup() {
  var text = createHTML("click to add particle systems");
  text.position(10,365);
  createGraphics(640,380);
}

function draw() {
  for(var i=0; i<systems.length; i++){
  	systems[i].addParticle();
  	systems[i].run();
  }  
 // background(255);
}

function mousePressed() {
  systems.push(new ParticleSystem(1, new PVector(mouseX,mouseY)));
}