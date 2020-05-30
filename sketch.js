
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin1;
var dustbin2;
var dustbin3;
var paper1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor= "Green";
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	dustbin1 = new dustbin(600,650,200,20);
	dustbin2 = new dustbin(500,610,30,100);
	dustbin3 = new dustbin(700,610,30,100);

	paper1 = new paper(40,50,20);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  drawSprites();
 
}
function keyPressed(){
 if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(paper1.body, paper1.body.position,{x:55,y:-55});
 }
}



