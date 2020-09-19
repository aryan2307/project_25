class Paper{
    constructor(){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(100,190,25,options);
        this.radius = 70;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        //ellipseMode(RADIUS);
        rectMode(CENTER);
        imageMode(CENTER);
        //ellipse(0,0,this.radius);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}