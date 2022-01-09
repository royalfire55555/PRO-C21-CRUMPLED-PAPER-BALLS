class Ball {
    constructor(x, y, r) {
        var ball_options = {
            restitution: 0.3,
            friction : 0,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x, y, r, ball_options);
        World.add(world, this.body)
        this.r = r;
    }

    display() {
        push();
        ellipseMode(CENTER);
        var pos = this.body.position;
        ellipse(pos.x, pos.y, this.r);
        pop();
    }
}