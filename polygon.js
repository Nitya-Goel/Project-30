class Polygon{
    constructor(x, y, radius){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.radius=radius;
        this.image=loadImage("polygon.png");
 
        this.body= Bodies.circle(x, y, this.radius, options)
        World.add(world, this.body);
    }
    display()
     {
         var polygonPos=this.body.position;	
         push()
         translate(polygonPos.x, polygonPos.y);
         // rectMode(CENTER);
         
         fill(255,0,255)
         imageMode(CENTER);
         ellipseMode(CENTER);
         image(this.image, 0,0,this.radius*2, this.radius*2)
         pop()
 }
 }
 