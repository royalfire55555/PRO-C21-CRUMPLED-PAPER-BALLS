class Ground {
    constructor(x, y, w, h) {
        var ground_options = {
            isStatic: true
        }

        this.body = Matter.Bodies.rectangle(x, y, w, h, ground_options);
        this.w = w;
        this.h = h

        World.add(world, this.body);
    }

    display() {
        push();
        rectMode(CENTER);
        var pos = this.body.position;
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}