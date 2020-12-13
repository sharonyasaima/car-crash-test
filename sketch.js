var car ,carImage,carred,caryellow,cargreen,wall;
var weight,speed;

function preload(){

carImage= loadImage("carblue.jpg");
carred= loadImage("redcar.jpg");
cargreen= loadImage("greencar.jpg");
caryellow= loadImage("yellowcar.png");



}
function setup() {
  createCanvas(1600,400);
  car=createSprite(100, 200, 75, 50);
  car.addImage("car",carImage);
  car.addImage("cargreen",cargreen);
  car.addImage("caryellow",caryellow);
  car.addImage("carred",carred);
  car.scale=0.5;
  weight=random(400,1200);
  speed=random(50,180);
  car.debug=true;

  car.velocityX=speed;
  wall=createSprite(1100,200,40,200);
  wall.shapeColor="black";

}

function draw() {
  background(255,255,255); 
  
  if(wall.x - car.x  <=  (wall.width/2  +   50/2)){
    car.velocityX=0;
    var  deformation=(0.5*weight*speed*speed/22500);
    deformation=(0.5*weight*speed*speed/22500);
    
   console.log(deformation);
  if(deformation>=180)
   car.changeImage("carred",carred);
  else if(deformation<=180 && deformation >=100)
  car.changeImage("caryellow",caryellow);
  else
  car.changeImage("cargreen",cargreen);


  
  }
  drawSprites();
}




