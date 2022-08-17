var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e721c18b-0f16-4e7a-95c6-6354eabe077d","7c662970-b584-4751-9288-d1736eaf0929","c3d76c73-d4b6-4d79-9682-89b64d775271","d9e82a05-326a-4865-949e-3a000b4345af","cb79cd0d-3c4e-4457-9b10-db76c0206478","27bd6f7b-942b-4c89-ab08-a238ee8ad879"],"propsByKey":{"e721c18b-0f16-4e7a-95c6-6354eabe077d":{"name":"car_black_1","sourceUrl":null,"frameSize":{"x":10,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"0SGzcHISjEK4CgPK__DHuPxqCdur5GPM","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":18},"rootRelativePath":"assets/e721c18b-0f16-4e7a-95c6-6354eabe077d.png"},"7c662970-b584-4751-9288-d1736eaf0929":{"name":"car_green_1","sourceUrl":null,"frameSize":{"x":10,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"poYWK0PGaBue0YYidgA1ICVEX47dY4vX","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":18},"rootRelativePath":"assets/7c662970-b584-4751-9288-d1736eaf0929.png"},"c3d76c73-d4b6-4d79-9682-89b64d775271":{"name":"car_yellow_1","sourceUrl":null,"frameSize":{"x":10,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"9tEqcD1qQuW1mQGMcewx1tpwrrHjCZ6y","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":18},"rootRelativePath":"assets/c3d76c73-d4b6-4d79-9682-89b64d775271.png"},"d9e82a05-326a-4865-949e-3a000b4345af":{"name":"car_red_1","sourceUrl":null,"frameSize":{"x":10,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"B5vIWcvd20GvFAi89OBAvb6fqg_W6k9j","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":18},"rootRelativePath":"assets/d9e82a05-326a-4865-949e-3a000b4345af.png"},"cb79cd0d-3c4e-4457-9b10-db76c0206478":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"0KkqIvZb10_7mD6IixseWNU0DQKSfBdQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":13},"rootRelativePath":"assets/cb79cd0d-3c4e-4457-9b10-db76c0206478.png"},"27bd6f7b-942b-4c89-ab08-a238ee8ad879":{"name":"building_22_1","sourceUrl":null,"frameSize":{"x":50,"y":33},"frameCount":1,"looping":true,"frameDelay":12,"version":"kynXy8HNh6T7w7jNdDFmqxDztFPsjIqW","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":33},"rootRelativePath":"assets/27bd6f7b-942b-4c89-ab08-a238ee8ad879.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


//variable de puntuacion

var life = 5;

Tienda = createSprite(371,190,52,140);
Tienda.setAnimation("building_22_1");



var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(50,190,13,13);
  sam.shapeColor = "green";
  
  
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("car_black_1");
  
  
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("car_green_1");
  
  
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
car3.setAnimation("car_red_1");
    
  
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("car_yellow_1");
  

 
 
//Agrega velocidad para hacer que el auto se mueva.

car1.velocityY= 7;
car2.velocityY= 7;
car3.velocityY= -7;
car4.velocityY= -7;



function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  
  fill("lightblue");
  rect(0,120,52,140);
 
  fill("yellow");
  rect(345,120,52,140);
  
  
 
  
  
  
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.

car1.bounceOff(boundary1);
car2.bounceOff(boundary1);
car3.bounceOff(boundary1);
car4.bounceOff(boundary1);
 
 car1.bounceOff(boundary2);
car2.bounceOff(boundary2);
car3.bounceOff(boundary2);
car4.bounceOff(boundary2);





//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.


if (keyDown("RIGHT")) {
  
  sam.x=sam.x +2;
}

if (keyDown("LEFT")) {
  
  sam.x=sam.x -2;
}




//Agregar la condición de reducir la vida de Sam si toca el carro.
  
 if (life==0) {
    
 sam.x=sam.x =0;
 
car1.velocityY= 0;
car2.velocityY= 0;
car3.velocityY= 0;
car4.velocityY= 0;
  
  fill("black");
        textSize(20);
        text("¡Fin del juego!",170,160); 
 }
   
   if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     life = life - 1;
  }
  
  if (sam.isTouching(Tienda)) {
   stroke(0)
fill(0)
textSize(24)
text("¡Ganaste!",120,200);
car1.velocityY=0;
car2.velocityY=0;
car3.velocityY=-0;
car4.velocityY=-0;
sam.velocityX= 0;




}
  
  
  
  
  
  
  
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
