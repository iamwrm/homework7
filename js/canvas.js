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
//Listeners!!
//Add a listener for loading the window

//Add a listener for the mouse movement
document.addEventListener('mousemove', draw);

//Add a listener for the touch move


//Add a listener for the keydown
// canvas.addEventListener("keydown", doKeyDown, true);
window.addEventListener("keypress", doKeyPress, false)
function doKeyPress(e) {
    console.log(e.keyCode)

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

    console.log(e.keyCode)
    if (e.keyCode == 38) {
        draw_switch = 0
    }
    if (e.keyCode == 40) {
        draw_switch = 1
    }
}

// last known position
var pos = { x: 0, y: 0 };

// window.addEventListener('resize', resize);
// window.onbeforeunload = resize
// window.addEventListener("unload", resize);

// document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
    pos.x = e.clientX - 5;
    pos.y = e.clientY - 6;
}

// resize canvas
function resize() {
    ctx.canvas.width = window.innerWidth * 0.75;
    ctx.canvas.height = window.innerHeight * 0.75;
    console.log("in resize")
}

function draw(e) {
    if (draw_switch == 1) {
        ctx.beginPath();

        ctx.lineWidth = radius;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;

        ctx.moveTo(pos.x, pos.y);
        setPosition(e);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    }
}