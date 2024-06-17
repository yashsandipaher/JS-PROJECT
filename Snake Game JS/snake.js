
function intialization(){
    console.log("init");
    canvas = document.getElementById("mycanvas");
    canvas_width = canvas.width = 500; 
    canvas_height = canvas.height = 500;
    pen = canvas.getContext("2d");
    rect = {
        x : 20,
        y : 20,
        w : 40,
        h : 40,
        speed :50
    }

}

function draw(){
    pen.clearRect(0,0,canvas_width,canvas_height);
    pen.fillRect(rect.x,rect.y,rect.w,rect.h);
    pen.fillStyle = "Red";
}

function update(){
        rect.x += rect.speed;
        if(rect.x > canvas_width-rect.w || rect.x < 0)
        {
            rect.speed *= -1;
        }

}

function gameLoop(){
    console.log("gameloop");
    draw();
    update();
}

intialization();
setInterval(gameLoop,100);
