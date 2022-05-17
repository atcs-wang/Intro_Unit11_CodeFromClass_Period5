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
        // Use ctx to draw.

        // Easy #3
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 10, 10);
    }

    /**
     * Update this actor for the next frame.
     */
    update() : void {
        // Update properties or other Actors in the actorList.
        
        // Easy #1
        this.x += 1;
        this.y += 1;
    }

    //Add more methods as helpful:

}

class FastActor extends Actor {
    //override
    update() {
        this.x += 3;
        this.y += 3; 
    }
}

class BigActor extends Actor {
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, 20, 20);
    }
}

class WrapActor extends FastActor {
    update() {
        super.update(); // move quickly

        //wrap around
        if (this.x > canvas.width)
            this.x -= canvas.width;
        if (this.y > canvas.height)
            this.y -= canvas.height;
            
    }
}

class ColorActor extends Actor {

    color : string;
    //override
    constructor( x : number, y : number, color : string){
        super(x,y); // call Actor constructor
        this.color = color;
    }
    //override
    draw(): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 10, 10);
    }
}

class PurpleActor extends ColorActor {
    
    constructor(x : number, y : number){
        super(x, y, "purple");
    }
}

class GreenActor extends ColorActor {
    
    constructor(x : number, y : number){
        super(x, y, "green");
    }
}

class OrangeActor extends ColorActor {
    
    constructor(x : number, y : number){
        super(x, y, "orange");
    }
}

// Recommended: Create sub-classes of Actor:

// class SubActor extends Actor { ... }
