// Some standard user-input events. Define handling of these events here.

let player : Player = new Player(canvas.width / 2, canvas.height - 10);

window.addEventListener("load", function() {
    //Handle when the whole page finishes loading
    //Use this to "set up" the initial state of things;

    //Often, this includes populating the actorList.
    // A sample:
    actorList.addActor(player);

    let rock : Rock = new Rock(canvas.width / 2, 50);
    actorList.addActor(rock);

    let fruit : Fruit = new Fruit(canvas.width / 2, 100);
    actorList.addActor(fruit);


})

canvas.addEventListener("click", function(event: MouseEvent) {
    //Handle click events
    //Get position of click on canvas: event.offsetX, event.offsetY
});

document.addEventListener("keydown", function(event: KeyboardEvent){
    //Handle keydown events
    //Get the key that was pressed: event.key
    if (event.key === "ArrowLeft") {
        player.moveLeft();
    }
    if (event.key === "ArrowRight") {
        player.moveRight();
    }
    
});

document.addEventListener("keyup", function(event:KeyboardEvent){
    //Handle keydown events
    //Get the key that was released: event.key

});

setInterval(function() {
    let rock : Rock = new Rock(Math.random() * canvas.width, -50);
    actorList.addActor(rock);
}, 2000)

setInterval(function() {
    let fruit : Fruit = new Fruit(Math.random() * canvas.width, -50);
    actorList.addActor(fruit);
}, 1500)


// Add more event handlers:

// Examples include:
// canvas.addEventListener("mousemove",function(event: MouseEvent) {...});
// canvas.addEventListener("mousedown",function(event: MouseEvent) {...});
// canvas.addEventListener("mouseup",function(event: MouseEvent) {...});

// Use setTimeout() for time-based events that will occur once
// Use setInterval() for time-based events that will occur regularly


//Define any global variables for tracking input states between events:
// Some samples:
// let lastMousePosition = {x: 0, y:0};
// let keysStatus = {leftKeyDown: false, rightKeyDown: false};
