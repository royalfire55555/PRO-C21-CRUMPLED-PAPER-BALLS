class Ground {
    constructor(x, y, w, h) {
        var ground_options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.body = Matter.Bodies.rectangle(x, y, w, h, ground_options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}