
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, leftWall;

function preload() {
}

function setup() {
	createCanvas(window.innerWidth, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(50, 200, 50);
	ground = new Ground(width / 2, height, width, 20);
	
	leftWall = new Ground(1100, 650, 20, 120);
	rightWall = new Ground(1300, 650, 20, 120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  ground.display();
  leftWall.display();
  rightWall.display();
  
  drawSprites();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		console.log("Throwing...")
		ball.throw();
	}
}
