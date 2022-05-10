let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

function drawCircle(x : number, y : number){
    ctx.beginPath();
    ctx.arc(x,y, 25, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

// drawCircle(100,100);
// drawCircle(200,300);

// let ballX : number = 100;
// let ballY : number = 200;
// let ballSpeedX : number = 1;
// let ballSpeedY : number = 2;

// a ball: [ballX, ballY, ballSpeedX, ballSpeedY]
let ballList = [
    [100, 200, 1, 2],
    [200, 400, -2, -1],
    [150, 150, -1, 3]
]

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for (const ball of ballList){
        drawBall(ball);
        updateBall(ball);
    }
}

function drawBall(ball : number[]){
    drawCircle(ball[0], ball[1]);
}

function updateBall(ball : number[]){
    //update motion of the ball
    ball[0] += ball[2];
    ball[1] += ball[3];

    //check if touching left or right wall
    //reverse the x component of the speed
    if (ball[0] <= 25 || ball[0] >= canvas.width - 25){
        ball[2] = - ball[2]
    }
    //check if touching top or bottom wall
    //reverse the y component of the speed
    if (ball[1] <= 25 || ball[1] >= canvas.height - 25){
        ball[3] = - ball[3]
    }

}

setInterval(draw, 20);

