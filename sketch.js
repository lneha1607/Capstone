var forrestImg, forrest;
 var girlImg, girl;
 var manImg, man;
 var rockImg, rock, rocksGroup;
 var gameState = "play";

function preload(){
   forrestImg = loadImage("Newfolder/forrest.jpg");
   girlImg = loadImage("Newfolder/GIRL.png");
   manImg = loadImage("Newfolder/MAN.png");
   rockImg = loadImage("Newfolder/ROCK.png");
}

function setup() {
  createCanvas(600, 600)
   
  forrest = createSprite(300,300);
  forrest.addImage("forrest", forrestImg);
  forrest.velocityX = -1;

    girl=createSprite(300,540,80,90);
  girl.addImage("girl",girlImg);
  girl.scale=0.3;

   man=createSprite(200,420,500,503);
   man.addImage("man",manImg);
   man.scale=0.3;
    
 
    rocksGroup = new Group();
  
}

function draw() {
  background(200);
  if(gameState==="play"){
     
    if(keyDown("space")){
    girl.velocityY=-5; 
    }  
    if(rocksGroup.isTouching(girl)){
       girl.velocityX=0;
    }
    if(forrest.x >300){
      forrest.x=100;
    }
     spawnRocks();
    drawSprites();
  }
  
    if(gameState==="end"){
      stroke("blue");
      fill("blue");
      textSize(30);
      text("Game Over",230,250);
    }
    
     drawSprites();
    
}
function spawnRocks(){
  if(frameCount%250===0){
     rock=createSprite(200,550)
     rock.addImage(rockImg)
     rock.x=Math.round(random(500,600));
     rock.velocityX=-1;
    rock.lifetime=600;
    rock.scale=0.2;
     rocksGroup.add(rock);
  }
}
  
  
 