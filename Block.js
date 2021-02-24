class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':0.1,
            'density':0.0002
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;

        if(this.body.speed<3){
          rectMode(CENTER);
          rect(pos.x, pos.y, this.width, this.height);
        } else{
          
    
          push();
            this.visibility -= 5;
            tint(255, this.visibility);
          pop();

          World.remove(world, this.body);
        }

        
      }
}