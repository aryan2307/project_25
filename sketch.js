const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paper, dustbin1, dustbin2, dustbin3, ground, dustbin_img;

function preload(){
  dustbin_img = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper();
	  dustbin1 = new Dustbin(640,500,250,20);
	  dustbin2 = new Dustbin(520,365,20,300);
    dustbin3 = new Dustbin(770,355,20,300);
	  ground = new Ground();
	  Engine.run(engine);
}


function draw() {
  background(255);
  Engine.update(engine);
  rectMode(CENTER);
  //ellipseMode(RADIUS);
  drawSprites();
  ground.display();
  paper.display();
  image(dustbin_img,520,210,250,300);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:40, y:-125});
  }
}