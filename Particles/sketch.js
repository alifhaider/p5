let emitters= [];

function mousePressed(){
  emitters.push(new Emitter(mouseX, mouseY));
}

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(0);
    for(let emitter of emitters){

    emitter.emit(1);
    emitter.show();
    emitter.update();
    }
}
