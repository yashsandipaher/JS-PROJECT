function intialization()
{
    myCanvas = document.getElementById("mycanvas");
    canvasWidth = myCanvas.width = 1000;
    canvasHeight = myCanvas.height = 866;
}

function draw()
{

}

function update()
{

}

function gameLoop()
{
    draw();
    update();
}

intialization();
setInterval(gameLoop,100);
