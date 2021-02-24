const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup(){
    var canvas = createCanvas(1450,800);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(150, 400, 70, 70);

    sling = new SlingShot(polygon.body, {x:150, y:400})

    blocks();
}

function draw(){
    background(0);
    Engine.update(engine); 
    
    push();
        fill("white");
        textSize(30);
        text("DRAG THE HEXAGON BACK AND LET GO TO LAUNCH IT TOWARDS THE BLOCKS", 110, 50);
        text("PRESS [SPACE] TO RESET", 500, 100);
    pop();

    polygon.display();
    sling.display();
    
    blockShow();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon.body);
    }
}


function blocks(){
    ground = new Ground(700, 775, 1450, 50);
    stand1 = new Ground(620, 550, 400, 10);
    stand2 = new Ground(1100, 350, 300, 10);

    //stack1 bottom row
    block1 = new Block(471, 540, 50, 60);
    block2 = new Block(520, 540, 50, 60);
    block3 = new Block(570, 540, 50, 60);
    block4 = new Block(620, 540, 50, 60);
    block5 = new Block(670, 540, 50, 60);
    block6 = new Block(720, 540, 50, 60);
    block7 = new Block(769, 540, 50, 60);
    
    //stack1 3rd row
    block8 = new Block(520, 450, 50, 60);
    block9 = new Block(570, 450, 50, 60);
    block10 = new Block(620, 450, 50, 60);
    block11 = new Block(670, 450, 50, 60);
    block12 = new Block(720, 450, 50, 60);

    //stack1 2nd row
    block13 = new Block(570, 390, 50, 60);
    block14 = new Block(620, 390, 50, 60);
    block15 = new Block(670, 390, 50, 60);

    //stack1 1st row
    block16 = new Block(620, 320, 50, 60);


    //stack2 bottom row
    block17 = new Block(1000, 300, 50, 60);
    block18 = new Block(1050, 300, 50, 60);
    block19 = new Block(1100, 300, 50, 60);
    block20 = new Block(1150, 300, 50, 60);
    block21 = new Block(1200, 300, 50, 60);

    //stack2 2nd row
    block22 = new Block(1050, 240, 50, 60);
    block23 = new Block(1100, 240, 50, 60);
    block24 = new Block(1150, 240, 50, 60);

    //stack2 1st row
    block25 = new Block(1100, 190, 50, 60);
}


function blockShow(){
    ground.display();
    stand1.display();
    stand2.display();

    fill(66, 227, 245);

    //stack1 bottom row
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    //stack1 3rd row
    fill(66, 245, 141)
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    //stack1 2nd row
    fill(245, 239, 66)
    block13.display();
    block14.display();
    block15.display();

    //stack1 1st row
    fill("white");
    block16.display();

    //stack2 bottom row
    fill(66, 227, 245);
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    //stack2 2nd row
    fill(66, 245, 141);
    block22.display();
    block23.display();
    block24.display();

    //stack2 1st row
    fill(245, 239, 66)
    block25.display();
}