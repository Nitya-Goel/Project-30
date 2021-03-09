class Block2{
    constructor(x, y, width, height){
   var options={
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
   }
   this.visibility = 255;
   this.width=width;
   this.height=height;
   this.body=Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);

   }
   display()
   {
        if(this.body.speed<3){
        var angle = this.body.angle;
           var Pos=this.body.position;		
           push()
           translate(Pos.x, Pos.y);
           rectMode(CENTER)
           rotate(angle);
           stroke("black");
           strokeWeight(2);
           fill(255, 190, 196)
           rect(0,0,this.width, this.height);
           pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility-5;
          tint(255, this.visibility);
          rect(0, 0, this.width, this.height);
          pop();
        }
           
   }
    
}