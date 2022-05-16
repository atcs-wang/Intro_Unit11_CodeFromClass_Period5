// Some standard user-input events. Define handling of these events here.

window.addEventListener("load", function() {
    //Handle when the whole page finishes loading
    //Use this to "set up" the initial state of things;

    //Often, this includes populating the actorList.
    // A sample:
    let firstActor : Actor = new Actor( canvas.width / 2 , canvas.height / 2);
    actorList.addActor(firstActor);
    // Easy #2
    actorList.addActor(new Actor( canvas.width * 3 / 4 , canvas.height / 4));
    actorList.addActor(new Actor( canvas.width / 4 , canvas.height * 3 / 4));
})

canvas.addEventListener("click", function(event: MouseEvent) {
    //Handle click events
    //Get position of click on canvas: event.offsetX, event.offsetY

    //Easy #5
    let newActor : Actor = new Actor(event.offsetX, event.offsetY);
    actorList.addActor(newActor); 
});

document.addEventListener("keydown", function(event: KeyboardEvent){
    //Handle keydown events
    //Get the key that was pressed: event.key

    // #Easy #4
    if (event.key === " ")
        actorList.removeAllActors();
});

document.addEventListener("keyup", function(event:KeyboardEvent){
    //Handle keydown events
    //Get the key that was released: event.key

});


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
