// The Nature of Code, Daniel Shiffman http://natureofcode.com



  var rainbow;
  var money;
  var candy;
  var whichpuke;
  var mySketch;

  //var puke;

  var s = function( sketch ) {
  
    
    // an array of ParticleSystems
    var systems = [];
  
  sketch.mouthWasOpen = function(picture) {
    //console.log("I'm about to make a ParticleSystem with this picture" + picture );
      systems.push(new ParticleSystem(picture, 1, new PVector((mouthX*.5),bottomlip)));
      //console.log('made it to the mouthWasOpen function');
      //console.log('toplip, bottomlip ' + toplip + ',' + bottomlip);
  }

  sketch.setup = function() {
    //var text = createHTML("click to add particle systems");
    //text.position(10,365);
    sketch.canvas = sketch.createCanvas(400, 300);
    //myp5.canvas.position(160, 125);
    sketch.canvas.class("p5canvas");   //THE CLASS REFERS TO THE CSS CLASS JESUS
    //canvas.style("position : relative;");  //this didn't work
    sketch.currentPicture = null;
    sketch.picImage = {};
    //sketch.picImage.rainbow = sketch.loadImage("styles/rainbow.png");
    sketch.picImage.money = sketch.loadImage("styles/quarter.png");
    sketch.picImage.candy = sketch.loadImage("styles/candy.png");
    sketch.picImage.puke = sketch.loadImage("styles/puke.png");
    sketch.currentPicture = sketch.picImage.money;
    //console.log("picImage " + sketch.picImage);
  }

  sketch.draw = function() {
    for(var i=0; i<systems.length; i++){
    	systems[i].addParticle();
    	systems[i].run();
    }  
    if (mouthopen == true){  //changed the if to a while, made no difference
      //console.log("I'm about to say mouth open:");
      //console.log(sketch.currentPicture);
      sketch.mouthWasOpen(sketch.currentPicture);
    }
  //myp5.background(255);
   //noFill();
   //myp5.rect(0, 0, 400, 300);
  }

  sketch.setPicture = function(picture) {
    console.log("I'm setting picture" + picture);
    sketch.currentPicture = sketch.picImage[picture];
    console.log("currentPicture is " + sketch.currentPicture);
  }

  mySketch = sketch;

};
// If its coming from outside the sketch you can use p5.thing, but inside the sketch its sketch.thing

var myp5 = new p5(s, 'p5canvas');