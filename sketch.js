

let ypos = 140;
let ystep = 30;
let xpos = 10;
let xstep = 30;
function setup() {
createCanvas(700, 1200);


  noLoop();
  stroke("white");
  var mainground1= createSprite (200,400,1000,30);
    gr1 = createSprite (300,350,20,135);
    gr2 = createSprite (500,350,20,135);
    gr3 = createSprite (400,350,20,135);
    gr4 = createSprite (200,350,20,135);
    gr5 = createSprite (100,350,20,135);
    gr6 = createSprite (0,350,20,135);
    gr7 = createSprite (600,350,20,135);
    gr8 = createSprite (700,350,20,135);
 

}

function draw() {
  background("blue");
  fill("black");
stroke("red");

  for (let i = 0; i < 100; i++) {
    ellipse(xpos+(xstep*i), ypos+(ystep*0), 20, 20);
  }
  for (let i = 0; i < 100; i++) {
    ellipse(xpos+(xstep*i), ypos+(ystep*1), 20, 20);
  }
  for (let i = 0; i < 100; i++) {
    ellipse(xpos+(xstep*i), ypos+(ystep*2), 20, 20);
  }
  for (let i = 0; i < 100; i++) {
    ellipse(xpos+(xstep*i), ypos+(ystep*3), 20, 20);
  }
  for (let i = 0; i < 100; i++) {
    ellipse(xpos+(xstep*i), ypos+(ystep*4), 20, 20);
  }
  ellipse(650,10,10,10);
  ellipse(600,10,10,10);
  ellipse(550,10,10,10);
  ellipse(500,10,10,10);
 ellipse(450,10,10,10);
 ellipse(400,10,10,10);  
 ellipse(350,10,10,10); 
 ellipse(300,10,10,10);
 ellipse(250,10,10,10);   
 ellipse(200,10,10,10); 
 ellipse(150,10,10,10);
 ellipse(100,10,10,10);  
 ellipse(50,10,10,10); 
 ellipse(0,10,10,10);
  drawSprites();
}