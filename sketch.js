const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundimg, tower,towerimg;
var canon, cannonBall;
var angle;

function preload() {
 backgroundimg=loadImage("./assets/background.gif")
 towerimg=loadImage("./assets/tower.png")
 }

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options={
  isStatic:true 
  }

  angleMode(DEGREES)
  angle=15
  
  ground = Bodies.rectangle(0,height-1,width*2,1,options)
  World.add(world,ground)

  tower = Bodies.rectangle(160,350,160,310,options)
  World.add(world,tower)

  canon=new Canon(180,110,130,100,angle)
  cannonBall= new CannonBall(canon.x,canon.y)
} 

function draw() {
  image(backgroundimg,0,0,1200,600)
 
  Engine.update(engine);
rect(ground.position.x,ground.position.y,width*2,1)
push();
imageMode(CENTER)
image(towerimg,tower.position.x,tower.position.y,160,310) 
pop();
canon.display();
cannonBall.display();
}
