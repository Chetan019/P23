const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3, bob4,bob5, roofObject; 
var rope1,rope2,rope3, rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
   
	bob1 = new bob(320,575,40) 
	bob2 = new bob(360,575,40) 
	bob3 = new bob(400,575,40) 
	bob4 = new bob(440,575,40) 
	bob5 = new bob(480,575,40)

    
	rope1=new rope(bob1.body,roofObject.body,-80, 0) 
	rope2=new rope(bob2.body,roofObject.body,-40, 0) 
	rope3=new rope(bob3.body,roofObject.body,0, 0) 
	rope4=new rope(bob4.body,roofObject.body,40, 0) 
	rope5=new rope(bob5.body,roofObject.body,80, 0)

    roofObject=new roof(400,250,230,20);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  

  //call display() to show ropes here
  roofObject.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(bob1.body,bob1.body.position, {x:-50,y:-45}); }
}