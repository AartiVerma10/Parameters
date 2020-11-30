var fixedRect,movingRect,box;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  box=createSprite(100,100,50,50);
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(isTouching(movingRect,box)){
  movingRect.shapeColor="red";
  box.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  box.shapeColor="green";
}
  drawSprites();
}

