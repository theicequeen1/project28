
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,tree,treeimg;
var boy,boyimg;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

//Declare launcherObject and launchForce variable here


function preload(){
	treeimg = loadImage("images/tree.png");
  boyimg = loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1000,650);

	engine = Engine.create();
	world = engine.world;

ground = new Ground ();

stones = new Stone (100,460,23);
mango1 = new Mango (600,290,34);
mango2 = new Mango (855,325,35);
mango3 = new Mango (670,260,35);
mango4 = new Mango (730,200,35);
mango5 = new Mango (710,320,36);
mango6 = new Mango (780,250,35);
mango7 = new Mango (825,170,33);
mango8 = new Mango (880,260,35);
mango9 = new Mango (940,220,35);
mango10 = new Mango (980,305,35);

attach = new Throw (stones.body,{x:100,y:465});
 
tree = createSprites(160,550);
boy.addImage(boyimg);
boy.scale = 0.125;

Engine.run(engine);
}


function draw() {
rectMode(CENTER);
 background(255);

 fill("black");
 textSize(18);

 dectectCollision(stone,mango1);
 dectectCollision(stone,mango2);
 dectectCollision(stone,mango3);
 dectectCollision(stone,mango4);
 dectectCollision(stone,mango5);
 dectectCollision(stone,mango6);
 dectectCollision(stone,mango7);
 dectectCollision(stone,mango8);
 dectectCollision(stone,mango9);
 dectectCollision(stone,mango10);
 
 drawSprites();

 stones.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  attach.fly();
}

function detectCollision(stones,mangoes){
  if(stones.body.position.x-mango.body.position.x<mango.daimetre + stones.daimetre
    && mango.body.position.x-mango.position.x<mango.daimetre + stone.daimetre
    && mango.body.position.y-stones.body.position.y<mango.daimetre + stones.daimetre
    && mango.body.position.y-stones.body.position.y<mango.daimetre + stones.daimetre);
    }

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stones.body,{x:100,y:465});
    attach.Launch(stones.body);
  }
}
