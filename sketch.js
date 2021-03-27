var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ground2,ground3,ground4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(2500, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	

	packageSprite=createSprite(30, 630, 10,10);

	groundSprite=createSprite(width/2, 660, 10000,10);
	

	b1 = new Box(2350,650,200,20);
	b2 = new Box(2260,600,20,100);
	b3 = new Box(2440,600,20,100);



var options = {
	restitution:0.3,
	friction:0.5,
	density:1.2,
	
}
	packageBody = Bodies.rectangle(30,630 , 10 , 10,options);
	World.add(world, packageBody);
	

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650,10000, 10 , {isStatic:true} );
 	World.add(world, ground);
	ground.visible = false;

	ground4 = Bodies.rectangle(2500, 350,10, 100000 , {isStatic:true} );
 	World.add(world, ground4);
	

	ground2 = Bodies.rectangle(width/2, 5,10000, 10 , {isStatic:true} );
 	World.add(world, ground2);
	

	ground3 = Bodies.rectangle(5, 650,10, 1000 , {isStatic:true} );
 	World.add(world, ground3);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(20);
  packageSprite.draw = function(){
	  ellipse(0,0,30,30)
	}

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  b1.display();
  b2.display();
  b3.display();


 keyPressed();
 drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.applyForce(packageBody,packageBody.position,{x:200,y:-30})

    
  }
}



