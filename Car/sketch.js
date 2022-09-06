let ball;

function setup() {
  createCanvas(600, 400);
  ball = new Ball(16, 200);
}

function draw() {
  background(51);
  ball.update();
  ball.show();
}

class Ball{
  constructor(x, y){
    this.pos = createVector(x,y);
    this.r = 32;
    this.vel = createVector(0.1, 0);
    this.acc = createVector(0.1, 0);
  }

  update(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);

    if(this.pos.x === 0 || this.pos.x > width){
      this.vel.mult(-1);
    }
  }

  

  show(){
    noFill();
    stroke(157, 128, 120);
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

}