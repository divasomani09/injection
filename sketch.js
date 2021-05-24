var injection,germ;
var injection_image,germ_image;
var wall,wall2,wall3,wall4;
var germGroup;
function preload(){
injection_image=loadImage("injection-removebg-preview.png");
germ_image=loadImage("germs-removebg-preview.png");


}
function setup() {
  createCanvas(800,400);
 injection= createSprite(400, 200, 50, 50);
 injection.addImage(injection_image);
 injection.scale=0.3
wall1= createSprite(0,395,1600,10);
wall2= createSprite(0,5,1600,10);
wall3= createSprite(5,0,10,800);
wall4= createSprite(795,0,10,800);

  }

function draw() {
  background(0); 
  if(keyDown(UP_ARROW))
  {
    injection.y=injection.y-5;
  }
  if(keyDown(RIGHT_ARROW))
  {
    injection.x=injection.x+5;
  }
  if(keyDown(DOWN_ARROW))
  {
    injection.y=injection.y+5;
  }
  if(keyDown(LEFT_ARROW))
  {
    injection.x=injection.x-5;
  }

  germs();
  if(germ.isTouching(injection))
  {
    germ.visible=false;
  }
  drawSprites();
}
function germs()
{
//write code here to spawn the clouds
   if (frameCount % 60 === 0) 
   {
    germ= createSprite(200,200,50,50);
    germ.y = Math.round(random(80,120)); 
  
    germ.addImage(germ_image);
    germ.velocityX= 2
    germ.velocityY= 4
    germ.scale=0.2
    
   
    //assign lifetime to the variable
   
     //adjust the depth
     
       }
        
     
     }











