const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground,box2,box3,box4,box5,pig1,pig2,log1,log2,log3,log4,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200,20);
    box1=new Box(700,350,80,80);
    pig1=new Pig(800,350,70,70);
    box2=new Box(900,350,80,80);
    log1 = new Log(800,330,300,20,PI);

    box3=new Box(700,250,80,80);
    pig2=new Pig(800,250,70,70);
    box4=new Box(900,250,80,80);
    log2 = new Log(800,230,300,20,PI);

    log3 = new Log(740,150,150,20,-PI/6);
    box5 = new Box(800,150,80,80);
    log4 = new Log(860,150,150,20,PI/6);


    bird = new Bird(200,200,60,60);
    

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    pig1.display();
    box2.display();
    log1.display();

    box3.display();
    pig2.display();
    box4.display();
    log2.display();

    log3.display();
    box5.display();
    log4.display();
    
    bird.display();
}