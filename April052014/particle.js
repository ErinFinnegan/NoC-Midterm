// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

function Particle(position) {
  this.acceleration = new PVector(0, 0.05);
  this.velocity = new PVector(myp5.random(-1, 1), myp5.random(-1, 0));
  this.position = position.get();
  this.lifespan = 255.0;  
}

Particle.prototype.run = function() {
  this.update();
  this.display();
}

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
}

// Method to display
Particle.prototype.display = function() {
  var whichpuke;
  whichpuke = vomit;
  myp5.fill(75, 255, 75);

  myp5.image(whichpuke, this.position.x, this.position.y, 50, 50);
  myp5.console.log("whichpuke = " + whichpuke); 
}

 // Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0.0) {
      return true;
    } 
    else {
      return false;
    }
}
