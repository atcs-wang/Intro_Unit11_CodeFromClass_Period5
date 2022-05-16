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

// Recommended: Create sub-classes of Actor:

// class SubActor extends Actor { ... }
