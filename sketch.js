var screen = 0;
let score = 0;

function preload(){
  myFont = loadFont('assets/BoltonShadowed.ttf');
  introImg = loadImage('assets/StartScreen.jpg');
  stepImg = loadImage('assets/StepScreen.jpg');
  mineImg = loadImage('assets/MineScreen.jpg');
  endImg = loadImage('assets/EndScreen.jpg')
}

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 20; i++) {
  let spr = createSprite(
    random(width), random(height),
    random(10, 50), random(10, 50));
    spr.shapeColor = random(255);
    spr.onMouseOver = removeAndScore;
  }
}

//Switch Statements
function draw() {
   if (screen == 0) {
    titleScreen();
  } else if (screen == 1) {
    stepScreen();
  } else if (screen == 2) {
    mine1Screen();
  } else if (screen == 3) {
    endScreen();
  }
}

//Intro Screen
function titleScreen() {
  background (introImg);
  //Crystal Perimeter
  push();
  beginShape();
  fill(255,233,240);
  strokeWeight(2.5);
  stroke(255,192,192);
  vertex(300, 35);
  vertex(280, 65);
  vertex(279, 76);
  vertex(280, 125);
  vertex(300, 140);
  vertex(320, 125);
  vertex(321, 76);
  vertex(320, 65);
  vertex(300, 35);
  endShape();
  //Crystal Lines
  line(300, 35, 297, 60);
  line(297, 60, 280, 65);
  line(297, 60, 303, 117);
  line(297, 60, 303, 117);
  line(303, 117, 320, 125);
  line(303, 117, 280, 125);
  line(303, 117, 320, 65);
  line(303, 117, 293, 133);
  pop();
  //Title
  push();
  fill (0);
  textSize(40);
  textFont(myFont);
  textAlign(CENTER);
  text ('Crystal Mining Simulation', height/1.34, width/3);
  pop();
  //Header
  push();
  fill(255,192,192);
  textSize(30);
  textFont(myFont);
  textAlign(CENTER);
  text ('Click to Start', height/1.33, width/2.3);
  pop();
}

function stepScreen() {
  background (stepImg);
  fill(255,192,192);
  textSize(50);
  textFont(myFont);
  textAlign(CENTER);
  text ('Instructions', height/1.3, width/7.0);
  //
  push();
  fill(255);
  textSize(20);
  text ('Hover mouse to collect all twenty crystals.', height/1.3, width/3.5);
  text ('Once all hidden crystals are collected,', height/1.3, width/2.3);
  text ('proceed to receive a visual prize.', height/1.3, width/2.05);
  pop();
  //
  push();
  fill(200);
  textSize(12);
  text ('Larger crystals have more energy.', height/1.3, width/3);
  text ('Smaller crystals have less energy.', height/1.3, width/2.7);
  pop();
  //
  push();
  fill(255,192,192);
  textSize(20);
  text ('Click to Continue', height/1.3, width/1.65);
  pop();
}

function mine1Screen() {
  background (mineImg);
  textSize(20);
  textFont(myFont);
  textAlign(CENTER);
//Events on Multiple Sprites
  drawSprites();
  fill(255,192,192);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (score < 20) {
    text(score, width/2, height/2);
  }
  else {
    push();
    fill(255);
    strokeWeight(4);
    stroke(255,192,192);
    rect(110, 140, 400, 180);
    pop();
    //
    push();
    fill(0);
    text('You Win!', width/2, height/2);
    pop();
    push();
    fill(255,192,192);
    textSize(30);
    text('Click to Receive Prize', width/1.95, height/1.5);
    pop();
  }
}

function endScreen () {
  background (endImg);
  fill(255,192,192);
  textSize(50);
  textFont(myFont);
  textAlign(CENTER);
  text ('Congratulations!', height/1.3, width/7.0);
  //
  push();
  fill(255);
  textSize(18);
  textAlign(CENTER);
  text ('You received energy from Rose Quartz crystals', height/1.3, width/5);
  pop();

  push();
  textSize(18);
  text ('Rose Quartz energy: promotes self love and care', height/1.3, width/1.85);
  pop();

  push();
  fill(255);
  textSize(15);
  text ('Press "a" to save and affirm energy', height/1.3, width/1.7);
  pop();
}

function mousePressed() {
  if(screen == 0) {
    startIntro();
  } else if (screen == 1) {
    startStep();
  } else if (screen == 2) {
    startMine1();
  } else if (screen == 3) {
    startEnd();
  }
}

function startIntro(){
  screen = 1;
}

function startStep(){
  screen = 2;
}

function startMine1(){
  screen = 3;
}

function startEnd(){
  screen = 4;
}

function removeAndScore() {
  score += 1;
  this.remove();
}
function keyPressed() {
  if (key === 'a'){
     saveCanvas();
  }
}
