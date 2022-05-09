let canvas = document.querySelector("canvas") as HTMLCanvasElement
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D

//set color/style
ctx.fillStyle = "blue"
ctx.strokeStyle = "red"

//draw rectangles: x,y,width, height
ctx.fillRect(100,50, 200, 150);
ctx.strokeRect(300,200, 100, 50);

//paths!
//draw some triangles
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(400,50);
ctx.lineTo(425,50);
ctx.lineTo(400,100);
ctx.closePath();
ctx.stroke(); //open triangle

ctx.fillStyle = "orange";
ctx.beginPath();
ctx.moveTo(500,50);
ctx.lineTo(525,50);
ctx.lineTo(500,100);
ctx.closePath();
ctx.fill();

//circles/semicircles

ctx.beginPath();
ctx.fillStyle = "purple";
ctx.arc(canvas.width/2, canvas.height/2, 
            150, 0, Math.PI * 2)
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "purple";
ctx.arc(canvas.width/2, canvas.height/2, 
            100, 0, Math.PI)
// ctx.closePath();
ctx.stroke();

