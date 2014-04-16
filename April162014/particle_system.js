// The Nature of Code Daniel Shiffman http://natureofcode.com

function ParticleSystem(){	
	//this.origin = position.get();
	this.particles = [];
}

ParticleSystem.prototype.addParticle = function(x,y){
	this.particles.push(new Particle(x,y));
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