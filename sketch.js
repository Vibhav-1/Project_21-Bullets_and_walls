var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200, 200, 50,  10);
  wall = createSprite(1200, 200, thickness, height/2);
 
  speed = random(223,321);
  thickness = random(22, 83);
  weight = random (30, 52);
  bullet.velocityX = speed;

  bullet.shapeColor = "white";
  wall.shapeColor = 80, 80, 80;
  Damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function draw() {
  background(0);  

 // console.log(car.x-wall.x +70);
  //console.log(wall.width/2 + car.width/2);

  //  console.log("deformation");
   // console.log(deformation);

if (hasCollided(bullet, wall)){
  bullet.velocityX = 0;
if (Damage > 10){
 wall.shapeColor = "red";
}

if (Damage <= 10){
  wall.shapeColor = "green";
 }
}
  drawSprites();
}

function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

 if (bulletRightEdge >= wallLeftEdge) {
    return true;
 }
 return false;
}