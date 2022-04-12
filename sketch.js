
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	
	restitution:0.3,
	friction:0,
	density:1.2
}
ball=Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
	
	ground =new Ground(600,350,1200,20);
	leftside=new Ground(900,300,10,80)
	rightside= new Ground(1000,300,10,80)
	Engine.run(engine)

}


function draw() {
  rectMode(CENTER);
  background(50);

  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,20)
  ground.show()
  leftside.show()
  rightside.show()
  text(mouseX+","+mouseY,mouseX,mouseY)
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:75,y:-75});
	}
}

