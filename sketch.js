var fixedrect, movingrect
function setup() {
  createCanvas(1200,400);

  fixedrect=createSprite(600,200,50,80);
  fixedrect.shapeColor="green";

  movingrect=createSprite (100,100,50,50);
  movingrect.shapeColor="green";

}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y<movingrect.width/2+fixedrect.width/2
    && fixedrect.y-movingrect.y<movingrect.width/2+fixedrect.width/2){
fixedrect.shapeColor="red";
movingrect.shapeColor="red";
    }

    else{
      fixedrect.shapeColor="green";
      movingrect.shapeColor="green";
    }
  drawSprites();
}