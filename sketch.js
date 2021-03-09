const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ground, stand1, stand2;
var hexagon, sling;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block17, block18, block19, block20, block21, block22, block23, block24, block25;


function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  hexagon=new Polygon(200, 200, 25)
	ground=new Ground(650, 600, 1300, 20);
    stand1=new Ground(500, 500, 300, 20);
    stand2=new Ground(900, 350, 250, 20);
    block1=new Block1(500, 470, 35, 45);
    block2=new Block1(535, 470, 35, 45);
    block3=new Block1(570, 470, 35, 45);
    block4=new Block1(605, 470, 35, 45);
    block5=new Block1(465, 470, 35, 45);
    block6=new Block1(430, 470, 35, 45);
    block7=new Block1(395, 470, 35, 45);
    block8=new Block1(900, 320, 35, 45);
    block9=new Block1(935, 320, 35, 45);
    block10=new Block1(970, 320, 35, 45);
    block11=new Block1(865, 320, 35, 45);
    block12=new Block1(830, 320, 35, 45);

    block13=new Block2(500, 425, 35, 45);
    block14=new Block2(535, 425, 35, 45);
    block15=new Block2(570, 425, 35, 45);
    block16=new Block2(465, 425, 35, 45);
    block17=new Block2(430, 425, 35, 45);
    block18=new Block2(900, 275, 35, 45);
    block19=new Block2(935, 275, 35, 45);
    block20=new Block2(865, 275, 35, 45);

    block21=new Block3(500, 380, 35, 45);
    block22=new Block3(535, 380, 35, 45);
    block23=new Block3(465, 380, 35, 45);
    block24=new Block3(900, 230, 35, 45);

    block25=new Block4(500, 335, 35, 45);
    
    sling=new slingshot(hexagon.body, {x:150, y:350})
	Engine.run(engine);

}
function draw() {

    background(60, 46, 46);
    
    fill(255);
    textSize(24);
    text("Drag the Hexagonal stone and release it, to launch it towards the blocks!", 250, 50);
    text("Press space to get a second chance", 250, 80);
    hexagon.display();
    ground.display();
    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();

    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    sling.display();
  }

  function mouseDragged() {
    Matter.Body.setPosition(hexagon.body, {x:mouseX, y:mouseY})
}

function mouseReleased() {
    sling.fly();
}

function keyPressed() {
  if(keyCode===32){
  sling.attach(hexagon.body);
}
}