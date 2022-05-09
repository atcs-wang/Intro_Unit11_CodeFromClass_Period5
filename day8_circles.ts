let canvas = document.querySelector("canvas") as HTMLCanvasElement
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D

function drawCircle(x : number, y : number){
    ctx.fillStyle = "blue"
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2)
    ctx.closePath();
    ctx.fill();
}

drawCircle(100,100);
drawCircle(200,200);

let randCircleButton = document.querySelector("button#randcircle") as HTMLButtonElement;
randCircleButton.addEventListener("click", function(){
    drawCircle(Math.random() * canvas.width, 
                Math.random() * canvas.height);
});
//click event for the canvas- draw a circle at the click location
canvas.addEventListener("click", function(event : MouseEvent) {
    drawCircle(event.offsetX, event.offsetY);
});

let clearButton = document.querySelector("button#clear") as HTMLButtonElement;
clearButton.addEventListener("click", function(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
})