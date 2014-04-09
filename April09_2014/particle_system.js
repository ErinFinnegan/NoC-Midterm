// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function ParticleSystem(picture, num, position){	
	this.origin = position.get();
	this.particles = [];
  // console.log("I'm about to make another particle" + picture);
  for (var i = 0; i < num; i++) {
      this.particles.push(new Particle(this.origin, money));    // Add "num" amount of particles to the arraylist
  }
}

ParticleSystem.prototype.addParticle = function(){
	this.particles.push(new Particle(this.origin));
}

ParticleSystem.prototype.run = function(){
	for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }

}