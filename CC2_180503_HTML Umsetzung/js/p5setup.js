new p5();

width = windowWidth;
height = windowHeight;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('canvas1');
    frameRate(30);
}

function windowResized() {
    resizeCanvas(windowWidth, 300);
    clear();
}
  