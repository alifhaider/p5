class Confetti extends Particle {
    constructor(x, y){
        super(x, y);
        this.angle = random(TWO_PI);
    }

    show(){
        noStroke();
        fill(255, this.lifetime);
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        square(0, 0, this.r * 2);
        pop();
    }
}