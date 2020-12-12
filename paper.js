class Paper{
    constructor(x,y,r){
        var options={isStatic:false,restitution:0.3,friction:0.5,density:1.2}
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.r = r
    }
    display(){
        var r = this.body.position
        ellipseMode(CENTER)
        ellipse(r.x,r.y,this.r,this.r)
        
    }
}