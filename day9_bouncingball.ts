let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;


function drawCircle(x: number, y: number){
    ctx.beginPath();
    ctx.arc(x,y,25,0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

let ballX = 100;
let ballY = 100;
let ballSpeedX = 1;
let ballSpeedY = 2;

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawCircle(ballX, ballY);
    update();
}

function update(){
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    //if you've touched a left or right "wall", flip the x component of ball speed
    if ( ballX <= 25 || ballX >= canvas.width - 25) {
        ballSpeedX = -ballSpeedX;
    }

     //if you've touched a top or bottom "wall", flip the y component of ball speed
     if ( ballY <= 25 || ballY >= canvas.height - 25) {
        ballSpeedY = -ballSpeedY;
    }

}

setInterval(draw, 18);
