// The Nature of Code, Daniel Shiffman http://natureofcode.com



  
  var s = function( sketch ) {
  

  // an array of ParticleSystems
  var systems = [];
  var canvas;

  /*sketch.mouthWasOpen = function() {
      systems.push(new ParticleSystem(3, new PVector((mouthX*.5),bottomlip)));
      //console.log('made it to the mouthWasOpen function');
      //console.log('toplip, bottomlip ' + toplip + ',' + bottomlip);
  }*/

  /*sketch.preload = function() {

  }*/

  sketch.setup = function() {
    mydefault = myp5.ellipse;
    sketch._money = sketch.loadImage("styles/quarter.png");
    sketch._candy = sketch.loadImage("styles/candy.png");
    sketch._rainbow = sketch.loadImage("styles/rainbow.png");
    sketch._puke = sketch.loadImage("styles/puke.png");    
    canvas = sketch.createCanvas(400, 300);
    //myp5.canvas.position(160, 125);
    canvas.class("p5canvas");   //references the HTML
    //sketch.mouthWasOpen();
    systems.push(new ParticleSystem());

  }

  sketch.draw = function() {
    sketch.clear();
    //sketch.background(0,255,0);
    for(var i=0; i<systems.length; i++){
      if (mouthopen) {
    	  //systems[i].addParticle(mouthX*.5,bottomlip);
        systems[i].addParticle(100,100);
      }
    	systems[i].run();
    }  
    //if (mouthopen == true){  //changed the if to a while, made no difference
      //sketch.mouthWasOpen();
    //}
    
    sketch.fill(255,0,0);
    sketch.rect(100,100,50,50);
    //sketch.image(_money,100,100);
    //sketch.println(sketch.mouseX);
    //sketch.ellipse(sketch.mouseX,sketch.mouseY,16,16);

   // background(255);
  }
  //mySketch = sketch;
};
// If its coming from outside the sketch you can use p5.thing, but inside the sketch its sketch.thing

var myp5 = new p5(s, 'p5canvas');