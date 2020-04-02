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


//Listeners!!
//Add a listener for loading the window

//Add a listener for the mouse movement
document.addEventListener('mousemove', draw);

//Add a listener for the touch move

// document.addEventListener('mousedown', setPosition);

//Add a listener for the keydown

canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d');
resize();

// last known position
var pos = { x: 0, y: 0 };

// window.addEventListener('resize', resize);
// window.onbeforeunload = resize
// window.addEventListener("unload", resize);

// document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

// resize canvas
function resize() {
    ctx.canvas.width = window.innerWidth * 0.75;
    ctx.canvas.height = window.innerHeight * 0.75;
    console.log("in resize")
}

function draw(e) {
    ctx.beginPath();

    ctx.lineWidth = radius;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;

    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);

    ctx.stroke();
}