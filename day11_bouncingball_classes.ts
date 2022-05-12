let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

class Ball {
    x : number;
    y : number;
    radius : number;
    speedX : number;
    speedY : number;
    color? : string;

    constructor(x : number, y : number, radius : number = 25,
                speedX? : number, speedY? : number, color : string = "black"){
        this.x = x;
        this.y = y;
        this.radius = radius;
        if (speedX === undefined)
            this.speedX = Math.random() * 10 - 5;
        else 
            this.speedX = speedX;
        // more concisely: use a ternary
        this.speedY = (speedY === undefined) ? Math.random() * 10 - 5 : speedY;
        this.color = color;
    }

    distanceTo(x : number, y: number) : number {
        return Math.sqrt( (x - this.x)**2 + (y - this.y)**2 );
    }

    isInside(x : number, y: number) : boolean {
        return this.distanceTo(x, y) < this.radius;
    }
        
    draw(){
        ctx.fillStyle = this.color || "black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update(){
        //update motion of the ball
        this.x += this.speedX;
        this.y += this.speedY;

        //check if touching left or right wall
        //reverse the x component of the speed
        if (this.x <= 25 || this.x >= canvas.width - 25){
            this.speedX = - this.speedX
        }
        //check if touching top or bottom wall
        //reverse the y component of the speed
        if (this.y <= 25 || this.y >= canvas.height - 25){
            this.speedY = - this.speedY
        }
    }

    setRandomColor(){
        /// set color to a random RGB value;
        let red : number = Math.floor(Math.random() * 256);
        let green : number = Math.floor(Math.random() * 256);
        let blue : number = Math.floor(Math.random() * 256);
        this.color = `rgba(${red}, ${green}, ${blue}, .5)` // the 'a' value is transperency
    }
}
let ballList : Ball[] = [
    new Ball (100, 200,   25, 1,  2,  "red"),
    new Ball (300, 200,  15, -1,  -2)
]

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for (const ball of ballList){
        ball.draw();
        ball.update();
    }
}

setInterval(draw, 20);

//click event for the canvas- draw a circle at the click location
canvas.addEventListener("click", function(event : MouseEvent) {
    if (event.shiftKey){
        let newBall : Ball = new Ball(event.offsetX, event.offsetY, Math.random() * 40 + 10);
        newBall.setRandomColor();
        ballList.push(newBall);    
    }
    else {
        for (const ball of ballList){
            //check if clicking that ball
            if (ball.isInside(event.offsetX, event.offsetY))
                ball.setRandomColor();
        }
    }

});
