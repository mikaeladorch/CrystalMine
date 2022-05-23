class Crystal {
  constructor(xPos, yPos, rotation){
    this.xPos = xPos;
    this.yPos = yPos;
    this.rotation = rotation; 
  }
  
  display() {
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
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
  }
  
  
}