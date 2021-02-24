class Polygon{
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            restitution: 10,
            density: 10
        }

        this.body = Bodies.rectangle(x, y, width-15, height-15);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");

        World.add(world, this.body);
    }

    display(){
        imageMode(CENTER);
        var pos = this.body.position;
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}