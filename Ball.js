class Ball {
    constructor(x, y, r) {
        var ball_options = {
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x, y, r, ball_options);
        this.pos = this.body.position;
        World.add(world, this.body)
        this.r = r;
        this.force = 650;
    }

    display() {
        push();
        ellipseMode(CENTER);
        ellipse(this.pos.x, this.pos.y, this.r);
        pop();
    }

    throw() {
        Body.applyForce(this.body, this.pos, { x: 1 * this.force, y: 1.2 * -this.force / 1.5 })
    }
}