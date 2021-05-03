class Mango{
    constructor(x,y,diametre){
        var options = {
            isStatic : true,
            'restitution' : 0.5,
            'friction' : 1.0,
        }
        this.body = Bodies.circle(x,y,daimetre,options);
        this.daimetre = daimetre;
        this.image = loadImage("images/mango.png");
        World.add(world, this.body);
        }

        display(){
          push();
          (this.body.position.x,this.body.position.y);
          imageMode(CENTER);
          image(this.image,0,0,this.diamatre);
          pop();  
        }
}