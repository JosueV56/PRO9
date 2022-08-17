var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["67f3791a-37bb-4168-ac33-70514224014f","b75a5e53-0f8b-49c3-8d29-a966ff7c87b7"],"propsByKey":{"67f3791a-37bb-4168-ac33-70514224014f":{"name":"golfball_1","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"UJxf2S.TJOqaQZGxoNPMbrdJ3q7eAbkK","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/67f3791a-37bb-4168-ac33-70514224014f.png"},"b75a5e53-0f8b-49c3-8d29-a966ff7c87b7":{"name":"porteriA.png_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"7f9wsx3iGocuNFy28eMwH6f2Cpx9q0vj","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b75a5e53-0f8b-49c3-8d29-a966ff7c87b7.png"}}};
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

var playerMallet;

var goal1=createSprite(200,18,80,20);
goal1.shapeColor=("yellow");
goal1.setAnimation("porteriA.png_1");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");
goal2.setAnimation("porteriA.png_1");

//variable para almacenar diferentes estados del juego
var gameState = "serve";

// hacer la cancha
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";



// crear objetos y asignarles colores
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";
striker.setAnimation("golfball_1");


var playerMallet = createSprite(200,68,50,10);
playerMallet.shapeColor = "orange";

var computerMallet = createSprite(200,318,50,10);
computerMallet.shapeColor = "lime";

// variables de puntuación
var playerScore=0;
var compScore=0;

function draw() {
  // despejar la pantalla
  background("green");
   
  if (gameState == "serve") 
  {
   
   //muestra texto de bienvenida
   fill("yellow");
   textSize(18);
   text("preciona space para jugar", 100, 150);
  
    //servir el delantero cuando se presiona la barra espaciadora
      if (keyDown("space")) {
        serve();
        //cambiar el estado del juego
         gameState="play";
      }
    
  }
  if (gameState == "play") {
    
     
  //make the player paddle move with the Arrow keys
  paddleMovement();
    
  //agregar la condición para comprobar si la puntuación de un jugador llega a 5
        if(playerScore==5 || compScore==5)
      {
       
       gameState = "end"
      }
        
  }
  if (gameState == "end") {
    
   striker.velocityX=0;
   striker.velocityY=0;
    fill("yellow");
        textSize(18);
        text("FIN DEL JUEGO!!",170,160);    
    
    
    
    
  }
  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
 
   //mostrar puntuaciones
  textSize(19);
  fill("white");
  text(compScore, 25,225);
  text(playerScore,25,185);
  
  // puntuación
   
     if(striker.isTouching(goal1))
      { // incrementar la puntuación del jugador
        compScore = compScore+ 1;
        //mostrar la cuadrícula para identificar el valor de x e y para mover al delantero al centro
       
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
        
      }
      
      if(striker.isTouching(goal2))
      {
        playerScore = playerScore + 1;
        // Reiniciar al delantero al agregar el valor central de x e y 
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
    
        
      }
       
    
    
   
 
 
 
  
  
  //IA para la paleta de la computadora
  //hacer que se mueva con la posición y del delantero
  computerMallet.x = striker.x;

  
  //dibujar la línea al centro
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //crear límites de bordes
  //hacer que el delantero rebote con el borde superior e inferior
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);

  
  //servir al delantero cuando se presiona la barra espaciadora
  if (keyDown("space")) {
    serve();
  }
  
 
  drawSprites();
}



























function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
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
