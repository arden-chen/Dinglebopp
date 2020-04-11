var canvas;
var windowScale = 1;
var xchange = 0;

//CLOCK VARIABLES
var a;
var b;
var radius;
var hchange = 0;

var circX;
var circY;


function setup() {
    //canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas = createCanvas(displayWidth * windowScale, displayHeight * windowScale);
    var width = displayWidth;
    var height = displayHeight;
    //CLOCK VARIABLES, LOCATION AND RADIUS
    a = width * 0.2;
    b = height * 0.2;
    radius = height / 5;
    
    circX = 100;
    circY = height/2;
}

function draw() {
    background('red');
    if (hchange == 5){//5 0'clock
        console.log("h");
        window.location.href = 'page.html';
    }
    textSize(32);
    fill('black');
    text('Use the left and right arrow keys to move the clock! Set the right time to enter!', 100,50);
    strokeWeight(6);
    var minute = xchange;
    var hour = hchange;
    var m = map(minute, 0, 60, 0, TAU) - HALF_PI;
    var h = map(hour + norm(minute, 0, 60), 0, 12, 0, TAU) - HALF_PI;
    var minutesRadius = (radius / 2) * 0.7;
    var hourRadius = (radius / 2) * 0.5;
    if (keyIsDown(RIGHT_ARROW)) {
        xchange++;
        if (xchange % 60 == 0) {
            hchange++;
            xchange -= 60;
        }
    }
    if (keyIsDown(LEFT_ARROW)) {
        xchange--;
        if (xchange % 60 == 0) {
            hchange--;
            xchange += 60;
        }
    }
    fill(255);
    strokeWeight(6);
    ellipse(a, b, radius); //CLOCK
    strokeWeight(7);
    line(a, b, a + cos(m) * minutesRadius, b + sin(m) * minutesRadius); //MINUTE HAND
    strokeWeight(8);
    line(a, b, a + cos(h) * hourRadius, b + sin(h) * hourRadius); //HOUR HAND
    addDashes();
    
    
}

function addDashes() {
    let clockRad = radius / 2;
    let dashRad = radius * 0.4;
    for (let i = 0; i < 12; i++) {
        var m = map(i, 0, 12, 0, TAU) - HALF_PI;
        strokeWeight(2);
        line(a + cos(m) * dashRad, b + sin(m) * dashRad, a + cos(m) * clockRad, b + sin(m) * clockRad);
    }
}
window.onresize = function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.size(w, h);
    width = w * windowScale;
    height = h * windowScale;
};