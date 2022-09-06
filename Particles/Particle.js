class Particle extends p5.Vector {
    constructor(x, y){
        super(x,y);
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(0.5  , 2));
        this.acc = createVector(0, 0);
        this.r = 8;
        this.lifetime = 255;
    }

    finished(){
        return (this.lifetime < 0);
    }

    applyForce(force){
        this.acc.add(force);
    }

    // edges(){
    //     if(this.pos.y >= height){
    //         this.pos.y = height;
    //         this.vel.y *= -1;
    //     }

    //     if(this.pos.x >= width){
    //         this.pos.x = width;
    //         this.vel.x *= -1;
    //     }else if(this.pos.x <= 0){
    //         this.pos.x = 0;
    //         this.vel.x *= -1;
    //     }
    // }

    update(){
        this.vel.add(this.acc);
        this.add(this.vel);
        this.acc.set(0, 0);

        this.lifetime -= 5;
    }

    show(){
        stroke(255, this.lifetime);
        strokeWeight(2);
        fill(255, this.lifetime);
        ellipse(this.x, this.y, this.r * 2);
    }
}