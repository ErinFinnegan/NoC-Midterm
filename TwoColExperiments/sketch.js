// The Nature of Code, Daniel Shiffman http://natureofcode.com

var rainbow;
var money;
var candy;

var s = function( sketch ) {

  // an array of ParticleSystems
  var systems = [];
  
  var mouthWasOpen = function() {
      systems.push(new ParticleSystem(1, new PVector((mouthX*.5),bottomlip)));
      //console.log('made it to the mouthWasOpen function');
      //console.log('toplip, bottomlip ' + toplip + ',' + bottomlip);
  }

  sketch.setup = function() {
    //var text = createHTML("click to add particle systems");
    //text.position(10,365);
    canvas = sketch.createCanvas(400, 300);
    canvas.position(160, 125);
    canvas.class("puke");   //I am not sure what the .class part does
    //canvas.style("position : relative;");  //this didn't work
    rainbow = sketch.loadImage("styles/rainbow.png");
    money = sketch.loadImage("styles/quarter.png");
    candy = sketch.loadImage("styles/candy.png");
  }

  sketch.draw = function() {
    for(var i=0; i<systems.length; i++){
    	systems[i].addParticle();
    	systems[i].run();
    }  
    if (mouthopen == true){  //changed the if to a while, made no difference
      mouthWasOpen();
    }
   // background(255);
  }

  sketch.mousePressed = function() {
    console.log("mouse pressed!");
    //console.log('mouseX, mouthX when clicked' + sketch.mouseX + ',' + sketch.mouthX);
  }
};
// If its coming from outside the sketch you can use p5.thing, but inside the sketch its sketch.thing

var myp5 = new p5(s, 'overlay');