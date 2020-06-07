var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  bullet = createSprite(50, 200,70,30);
  wall = createSprite(1200,200,thickness,200);
  wall.shapecolor = color(80,80,80);

  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background(255,255,255); 
  bullet.velocityX = speed

  if(wall.x - bullet.x < (bullet.width + wall.width) / 2){
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;

    if(damage > 10){
      wall.shapeColor = color("red");
    }

    if(damage < 10){
      wall.shapeColor = color("green");
    }
  }
  drawSprites();
}