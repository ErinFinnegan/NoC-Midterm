// The Nature of Code by Daniel Shiffman http://natureofcode.com

// Simple Particle System - a simple Particle class
var log = false;
function Particle(x,y) {
  this.acceleration = new PVector(0, 0.05);
  this.velocity = new PVector(myp5.random(-1, 1), myp5.random(-1, 0));
  this.position = new PVector(x,y);
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
  //myp5.fill(75, 255, 75);
  //myp5.ellipse(this.position.x,this.position.y,50,50);
  //myp5.image(myp5._money,this.position.x,this.position.y);
  // if(!log){
  //   console.log("whichpuke =");
  //   console.log(whichpuke);
  //   log = true;
  // }

  //apparently this is horrible for performance
  if(display_image === 1) {
    myp5.image(myp5._money, this.position.x, this.position.y, 50, 50);
  } else if (display_image === 2) {
    myp5.image(myp5._candy, this.position.x, this.position.y, 50, 50);
  } else if (display_image === 3) {
    myp5.image(myp5._rainbow, this.position.x, this.position.y, 50, 50);
  } else if (display_image === 4) {
    myp5.image(myp5._puke, this.position.x, this.position.y, 50, 50);
  }

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
