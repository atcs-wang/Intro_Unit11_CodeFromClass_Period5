// Define the properties/ behavior of Actor 
class Actor {
    
    //List all properties:
    x : number;
    y : number;

    constructor(x : number, y : number) {
        //set up properties
        this.x = x;
        this.y = y;
    }

    /**
     * Draw the actor on the canvas.
     */
    draw() : void {
        // Use ctx to draw. A sample (drawing a small circle):
    }

    /**
     * Update this actor for the next frame.
     */
    update() : void {
        // Update properties or other Actors in the actorList.
        
    }

    //Add more methods as helpful:

}

// Recommended: Create sub-classes of Actor:

// class SubActor extends Actor { ... }

class Player extends Actor {

    xSpeed : number;
    size : number;

    constructor(x : number, y: number){
        super(x,y);
        this.xSpeed = 0;
        this.size = 10;
    }

    moveRight(){
        this.xSpeed = 5;
    }

    moveLeft(){
        this.xSpeed = -5;
    }

    //override
    draw() : void {
        ctx.fillStyle = "orange";
        ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
    }

    update() : void {
        this.x += this.xSpeed;
    }



}

class FallingCircle extends Actor {

    color : string;
    fallSpeed : number;

    constructor(x : number, y : number, color : string, fallSpeed : number){
        super(x, y);
        this.color = color;
        this.fallSpeed = fallSpeed;
    }

    draw() : void {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y, 20, 0 , Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() : void {
        this.y += this.fallSpeed;
        if (this.y > canvas.height + 50)
            actorList.removeActor(this);
        
        //check for collision with player
        if ( Math.sqrt( (player.x - this.x) ** 2 + (player.y - this.y) ** 2) < 20){
            this.touchPlayer();
        }
    }

    touchPlayer() {
        actorList.removeActor(this);
    }
}

class Rock extends FallingCircle {
    //override
    constructor(x : number, y : number){
        super(x,y,"grey", 5);
    }

    touchPlayer() {
        actorList.removeActor(this);
        actorList.removeActor(player);
    }
}

class Fruit extends FallingCircle {
    //override
    constructor(x : number, y : number){
        super(x,y,"purple", 4);
    }

    touchPlayer() {
        actorList.removeActor(this);
        player.size += 2;
    }
}
