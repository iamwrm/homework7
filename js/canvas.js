var radius = 15;

// for color picker
color = document.getElementById("clr");
color = "red"

var colorPicker = document.querySelector('#clr');
colorPicker.addEventListener('change', updateColor);

function updateColor(e) {
    color = document.getElementById("clr").value;
}
// ======================================================

canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d');
resize();

var draw_switch = 1;
//Add a listener for loading the window

//Add a listener for the mouse movement
canvas.addEventListener('mousemove', move_to_draw, false);
//Add a listener for the touch move
canvas.addEventListener('touchmove', move_to_draw, false);


//Add a listener for the keydown
window.addEventListener("keypress", doKeyPress, false)
function doKeyPress(e) {

    // b
    if (e.keyCode == 98) {
        color = "rgb(0,0,255)"
    }
    // r
    if (e.keyCode == 114) {
        color = "rgb(255,0,0)"
    }
    // g
    if (e.keyCode == 103) {
        color = "rgb(0,128,0)"
    }
    // y
    if (e.keyCode == 121) {
        color = "rgb(255,255,0)"
    }
    // space
    if (e.keyCode == 32) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

window.addEventListener("keydown", doKeyDown, false)

function doKeyDown(e) {
    if (e.keyCode == 38) {
        draw_switch = 0
    }
    if (e.keyCode == 40) {
        draw_switch = 1
    }
}
// =============================================================


// resize canvas
function resize() {
    ctx.canvas.width = window.innerWidth * 0.75;
    ctx.canvas.height = window.innerHeight * 0.75;
}



function drawDot(ctx, x, y) {
    ctx.fillStyle = color
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

function move_to_draw(e) {
    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }

    if (draw_switch == 1) {
        drawDot(ctx, mouseX, mouseY);
    }
}

