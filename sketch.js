var screen = 0;

function setup() {
  createCanvas(600, 400);
  background(220);
}

//Switch Statements
function draw() {
   if (screen == 0) {
    introScreen();
  } else if (screen == 1) {
    mine1Screen();
  } else if (screen == 2) {
    mine2Screen();
  } else if (screen == 3) {
    mine3Screen();
  } else if (screen == 4) {
    endScreen();
  }
}

//Intro Screen
function introScreen() {
  background (255,204,231)
  textSize (40)
  textAlign(CENTER)
  text ('Crystal Mining Simulation', height/1.5, width/3);
  text ('Click to Start', height/1.5, width/2);
}

function mine1Screen() {
  background (178,255,214)
  textSize (30)
  text ('1st Mine Location - Easy', height/4, width/2);
}

function mine2Screen() {
  background (219,255,178)
  textSize (30)
  text ('2nd Mine Location - Intermediate', height/7, width/2);
}

function mine3Screen() {
  background (178,219,255)
  textSize (30)
  text ('3rd Mine Location - Difficult', height/5, width/2);
}

function endScreen () {
  background (0,103,98)
  textSize (30)
  text ('End/Thank You Screen', height/5, width/2);
}

function mousePressed() {
  if(screen == 0) {
    startIntro();
  } else if (screen == 1) {
    startMine1();
  } else if (screen == 2) {
    startMine2();
  } else if (screen == 3) {
    startMine3();
  } else if (screen == 4) {
    startEnd();
  }
}

function startIntro(){
  screen = 1;
}

function startMine1(){
  screen = 2;
}

function startMine2(){
  screen = 3;
}

function startMine3(){
  screen = 4;
}

function startEnd(){
  screen = 5;
}
