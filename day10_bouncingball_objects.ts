let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

interface Ball {
    x : number;
    y : number;
    speedX : number;
    speedY : number;
    radius : number;
    color? : string;
}
let ballList : Ball[] = [
    {x : 100, y: 200, speedX: 1, speedY: 2, radius: 25, color: "red"},
    {x : 200, y: 400, speedX: -2, speedY: -1, radius: 35, color: "blue"},
    {x: 150, y: 150, speedX: -1, speedY: 3, radius: 15},
    {x: 300, y: 300, speedX:5, speedY:-4, radius: 3}
]

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for (const ball of ballList){
        drawBall(ball);
        updateBall(ball);
    }
}

function drawBall(ball : Ball){
    ctx.fillStyle = ball.color || "black";
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

function updateBall(ball : Ball){
    //update motion of the ball
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    //check if touching left or right wall
    //reverse the x component of the speed
    if (ball.x <= 25 || ball.x >= canvas.width - 25){
        ball.speedX = - ball.speedX
    }
    //check if touching top or bottom wall
    //reverse the y component of the speed
    if (ball.y <= 25 || ball.y >= canvas.height - 25){
        ball.speedY = - ball.speedY
    }

}

setInterval(draw, 20);

//click event for the canvas- draw a circle at the click location
canvas.addEventListener("click", function(event : MouseEvent) {
    let newBall : Ball = {x : event.offsetX, 
                        y: event.offsetY,
                        speedX: Math.random() * 10 - 5,
                        speedY: Math.random() * 10 - 5,
                        radius: Math.random() * 40 + 10};
    /// set color to a random RGB value;
    let red : number = Math.floor(Math.random() * 256);
    let green : number = Math.floor(Math.random() * 256);
    let blue : number = Math.floor(Math.random() * 256);
    newBall.color = `rgba(${red}, ${green}, ${blue}, .5)` // the 'a' value is transperency
    ballList.push(newBall);
});
