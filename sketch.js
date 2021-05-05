var tower,towerImg;
var doorImg,doorsGroup;
var climber,climberImg,climbersGroup;
var ghost,ghostImg;
var invisibleBlock,invisibleBlocksGroup;
var gameState="play";
function preload(){
  towerImg=loadImage("tower.png")
  doorImg=loadImage("door.png")
  climberImg=loadImage("climber.png")
  ghostImg=loadImage("ghost-standing.png")
  doorsGroup=new Group();
  climbersGroup=new Group();
  invisibleBlocksGroup=new Group();
}

function setup(){
  createCanvas(600,600);  
  tower=createSprite(260,300);
  tower.addImage(towerImg);
  tower.velocityY=2;
  ghost=createSprite(200,200,5,5);
  ghost.addImage(ghostImg);
  ghost.scale=0.3;
   ghost.velocityY=10;
}
function draw(){
background("white");

if (gameState==="play"){

if(tower.y>600){
  tower.y=300;
}
if (keyDown("left_arrow")){
    ghost.x=ghost.x-2;
    }  
if(keyDown("right_arrow")){
ghost.x=ghost.x+2  
}
if (keyDown("space")){
  ghost.velocityY=-10;
}
ghost.velocityY=ghost.velocityY+1;
  if(climbersGroup.isTouching(ghost)){
  ghost.velocityY=0;  
  }
  if(invisibleBlocksGroup.isTouching(ghost)||ghost.y>600){
  ghost.destroy();
  gameState="end";
  }
  spawnDoors();
drawSprites();
}
}
function spawnDoors(){
  if(frameCount%240===0){
  var door=createSprite(300,0);
  var climber=createSprite(300,60);
  var invisibleBlock=createSprite(300,70,climber.width,2);
  //invisibleBlock.width=climber.width;
  //invisibleBlock.heigth=2;
    
  door.x=Math.round(random(120,400))
  climber.x=door.x;
  invisibleBlock.visible=false;  
  invisibleBlock.x=door.x
  
  climber.addImage(climberImg);
  door.addImage(doorImg);
    
  climber.velocityY=2;
  door.velocityY=2;
  invisibleBlock.velocityY=2;
  
  doorsGroup.add(door);
  climbersGroup.add(climber);
  invisibleBlocksGroup.add(invisibleBlock);
  door.lifetime=400;
  climber.lifetime=400;
  invisibleBlock.lifeTime=400;
  ghost.depth=door.depth;
  ghost.depth +=1;
  }
  
}