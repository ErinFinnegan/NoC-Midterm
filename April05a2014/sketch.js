// The Nature of Code, Daniel Shiffman http://natureofcode.com



  var rainbow;
  var money;
  var candy;
  var whichpuke;
  //var puke;

  var s = function( sketch ) {
  

  // an array of ParticleSystems
  var systems = [];
  
  sketch.mouthWasOpen = function() {
      systems.push(new ParticleSystem(1, new PVector((mouthX*.5),bottomlip)));
      //console.log('made it to the mouthWasOpen function');
      //console.log('toplip, bottomlip ' + toplip + ',' + bottomlip);
  }

  sketch.setup = function() {
    //var text = createHTML("click to add particle systems");
    //text.position(10,365);
    myp5.canvas = sketch.createCanvas(400, 300);
    //myp5.canvas.position(160, 125);
    myp5.canvas.class("p5canvas");   //THE CLASS REFERS TO THE CSS CLASS JESUS
    //canvas.style("position : relative;");  //this didn't work
    rainbow = sketch.loadImage("styles/rainbow.png");
    money = sketch.loadImage("styles/quarter.png");
    candy = sketch.loadImage("styles/candy.png");
    puke = sketch.loadImage("styles/puke.png");
    whichpuke =  rainbow;
  }

  sketch.draw = function() {
    for(var i=0; i<systems.length; i++){
    	systems[i].addParticle();
    	systems[i].run();
    }  
    if (mouthopen == true){  //changed the if to a while, made no difference
      sketch.mouthWasOpen();
    }
  //myp5.background(255);
   //noFill();
   //myp5.rect(0, 0, 400, 300);
  }

};
// If its coming from outside the sketch you can use p5.thing, but inside the sketch its sketch.thing

var myp5 = new p5(s, 'p5canvas');