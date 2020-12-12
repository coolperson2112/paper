
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,670,800,30)
dustbin = new Dustbin(650,620,30,60) 
dustbin2 = new Dustbin(700,640,100,10) 
dustbin3 = new Dustbin(750,620,30,60) 
paper = new Paper(10,600,30,30)
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("blue");
  ground.display()
  dustbin.display()
  dustbin2.display()
  dustbin3.display()
  paper.display()
  drawSprites();

}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:270})
  }
}



