const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function preload()
{
 
}

function setup() 
{
  createCanvas(1536,600);

  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(650,550,400,20);
  ground2 = new Ground(1300,300,200,20);
  ground3 = new Ground(1300,570,200,20);

  box1 = new Box(650,450,50,80);
  box2 = new Box(600,450,50,80);
  box3 = new Box(550,450,50,80);
  box4 = new Box(500,450,50,80);
  box5 = new Box(700,450,50,80);
  box6 = new Box(750,450,50,80);
  box7 = new Box(800,450,50,80);

  box8 = new Box2(725,390,50,80);
  box9 = new Box2(775,390,50,80);
  box10 = new Box2(675,390,50,80);
  box11 = new Box2(625,390,50,80);
  box12 = new Box2(575,390,50,80);
  box13 = new Box2(525,390,50,80);

  box14 = new Box3(650,330,50,80);
  box15 = new Box3(700,330,50,80);
  box16 = new Box3(750,330,50,80);
  box17 = new Box3(600,330,50,80);
  box18 = new Box3(550,330,50,80);

  box19 = new Box4(575,270,50,80);
  box20 = new Box4(625,270,50,80);
  box21 = new Box4(675,270,50,80);
  box22 = new Box4(725,270,50,80);

  box23 = new Box5(700,210,50,80);
  box24 = new Box5(650,210,50,80);
  box25 = new Box5(600,210,50,80);

  box26 = new Box6(625,150,50,80);
  box27 = new Box6(675,150,50,80);

  box28 = new Box7(650,90,50,80);

  box29 = new Box5(1250,250,50,80);
  box30 = new Box5(1300,250,50,80);
  box31 = new Box5(1350,250,50,80);

  box32 = new Box6(1325,190,50,80);
  box33 = new Box6(1275,190,50,80);

  box34 = new Box7(1300,130,50,80);

  box35 = new Box(1300,490,50,80);
  box36 = new Box(1350,490,50,80);
  box37 = new Box(1250,490,50,80);

  box38 = new Box2(1325,430,50,80);
  box39 = new Box2(1275,430,50,80);

  box40 = new Box3(1300,370,50,80);

  polygon = new Polygon(150,160,50,50);

  slingshot = new Slingshot(polygon.body,{x:150,y:160});

}

function draw() 
{
  background(210,105,30); 
  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();

  polygon.display();

  slingshot.display();

  push();
  textSize(30);
  fill("black");
  text("Press Space for second chances!!",768,50);
  pop();

  drawSprites();
}


function mouseDragged()
{
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}

function keyPressed()
{
  if(keyCode ===32){
      slingshot.attatched(polygon.body);
  }
}