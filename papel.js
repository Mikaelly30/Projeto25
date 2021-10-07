class papel{
constructor(x,y,r){
     
    var options={
        isStatic:false,
        restitution:0.3,
        friction:100,
        density:1.2
    
    }
    this.x=x;
	this.y=y;
    this.r=r;
    this.body = Bodies.circle(x, y,r,options);
    this.image = loadImage("paper.png");
   
    World.add(world, this.body);
}
display(){
   
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  }
  function keyPressed(){
      if(keyCode === UP_ARROW) {
          Matter.Body.applyForce(objetoPapel.body,objetoPapel.body.position,{x:130,y:-145});
      }
}