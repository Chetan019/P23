class rope{
	constructor(body1, body2, ponitA, pointB);
{
    this.pointA = pointA
	this.pointB = pointB

	var options = {
		bodyA:body1,
		bodyB:bodyB,
		pointB:{x:this.pointA, y:this.pointB}
	}
	//create rope constraint here
     this.rope = Constraint.create(options)
	 World.add(world, this.rope);
	}


    //create display() here 
     display()
	 {
		var pointA=this.rope.bodyA.position; 
		var pointB=this.rope.bodyB.position; strokeWeight(2); 
		var Anchor1X=pointA.x 
		var Anchor1Y=pointA.y 
		var Anchor2X=pointB.x+this.offsetX 
		var Anchor2Y=pointB.y+this.offsetY 
		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
	 }
}
