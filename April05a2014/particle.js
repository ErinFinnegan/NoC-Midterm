// The Nature of Code by Daniel Shiffman http://natureofcode.com

// Simple Particle System - a simple Particle class
var log = false;
function Particle(position, picture) {
  
  this.acceleration = new PVector(0, 0.05);
  this.velocity = new PVector(myp5.random(-1, 1), myp5.random(-1, 0));
  this.position = position.get();
  this.lifespan = 255.0;
  this.picture = picture;  
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
  //var whichpuke = vomit;
  if(!log) {console.log(rainbow); log = true;}
  myp5.fill(75, 255, 75);
  // console.log("I'm about to draw" + this.picture);
  // console.log("I'm drawing image now " + this.picture);
  myp5.image(mySketch.picImage.rainbow, this.position.x, this.position.y, 50, 50);
}

Particle.prototype.setPicture = function(pic) {
  this.picture = pic;
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
