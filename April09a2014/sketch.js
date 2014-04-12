// The Nature of Code, Daniel Shiffman http://natureofcode.com



  var rainbow;
  var money;
  var candy;
  var whichpuke;
  var mySketch;
  var mydefault = "mydefault";
  
  var s = function( sketch ) {
  

  // an array of ParticleSystems
  var systems = [];
  
  sketch.mouthWasOpen = function() {
      systems.push(new ParticleSystem(1, new PVector((mouthX*.5),bottomlip)));
      //console.log('made it to the mouthWasOpen function');
      //console.log('toplip, bottomlip ' + toplip + ',' + bottomlip);
  }

  sketch.setup = function() {
    mydefault = myp5.ellipse;
    myp5.canvas = sketch.createCanvas(400, 300);
    //myp5.canvas.position(160, 125);
    myp5.canvas.class("p5canvas");   //references the HTML
    money = sketch.loadImage("styles/quarter.png");
    candy = sketch.loadImage("styles/candy.png");
    rainbow = sketch.loadImage("styles/rainbow.png");
    whichpuke =  "mydefault";
    console.log("whichpuke in the setup  = " + whichpuke);
  }

  sketch.draw = function() {
    for(var i=0; i<systems.length; i++){
    	systems[i].addParticle();
    	systems[i].run();
    }  
    if (mouthopen == true){  //changed the if to a while, made no difference
      sketch.mouthWasOpen();
    }
   // background(255);
  }
 mySketch = sketch;
 console.log("whichpuke post mySketch call = " + whichpuke);
};
// If its coming from outside the sketch you can use p5.thing, but inside the sketch its sketch.thing

var myp5 = new p5(s, 'p5canvas');