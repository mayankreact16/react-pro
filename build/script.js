var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var cW = canvas.width = window.innerWidth;
var cH = canvas.height = window.innerHeight;
var x = 0, y = 0;


var trail = [];
var maxTrailLength = 20;

function drawCircle() {
    ctx.clearRect(0, 0, cW, cH); 
    ctx.fillStyle = "rgba(0, 0, 0, 0)"; 
    ctx.fillRect(0, 0, cW, cH);
    
    
    trail.push({x: x, y: y});
    
    
    if (trail.length > maxTrailLength) {
        trail.shift();
    }

  
    for (var i = 0; i < trail.length; i++) {
        var opacity = (i + 1) / trail.length;
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, 50, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`; 
        ctx.fill();
    }

    requestAnimationFrame(drawCircle);
}

drawCircle();

function move(e) {
    x = e.clientX;
    y = e.clientY;
}

canvas.addEventListener("mousemove", move);
