var back,backImg;
var player,playerImg;
var oppo1,oppo2,oppo3
var virg1,virg2,virg3
var END=0;
var PLAY=1;
var gameState=PLAY;
var score=0;

  virg1=  new Group();
  virg2= new Group();
  //virg3=new Group();
  

function preload(){
    backImg=loadImage("hill.jpg");
}
function setup(){

    createCanvas(800,600);
    back=createSprite(550,300);
    back.addImage(backImg);
    back.scale=4;
    back.velocityX=-4;

    player=createSprite(50,500,30,30);
    player.scale=2;
    
}
function draw(){
    background(0);

    text("Score:"+score,500,260);
    //textsize(25);
    if(gameState===PLAY){
        back.velocityX= -(4+3*score/200);

        score=score+Math.round(getFrameRate()/50)
console.log(score);
    
    if(back.x <50 ){
        back.x= back.width/2
    }


    virusone();
    virustwo();
    edges= createEdgeSprites();
  player.collide(edges);

  if(keyDown("UP_ARROW")){
    player.velocityY=-2;
  };
 if(keyDown("DOWN_ARROW")){
    player.velocityY=2;
  };
  if(keyDown("RIGHT_ARROW")){
    player.velocityX=2;
  };
  if(keyDown("LEFT_ARROW")){
    player.velocityX=-2
  }

  /*if(virg1.isTouching(player)){
    gameState = END;
    oppo1.velocityY=0;
  }*/
    }
    
    drawSprites();
    
}
function virustwo(){
  if(frameCount%60===0){
    var oppo2=createSprite(600,400,40,10);
    oppo2.y=Math.round(random(300,400));
    oppo2.scale=0.7;
    oppo2.velocityX=-2;
    virg2.add(oppo2)
  }
}
function virusone(){
    if(frameCount%60===0){
      var oppo1=createSprite(600,450,40,10);
      oppo1.y=Math.round(random(350,450));
      oppo1.scale=0.5;
      oppo1.velocityX=-3;
      virg1.add(oppo1);
    }
    

  }
  