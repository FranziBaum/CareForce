new p5();

let fox;

function setup() {
  console.log("Setup");
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
}

function preload() {
  console.log("Preload");
  fox = loadModel('fox.obj', true, function(obj) {
    console.log("Hello");
    console.log(fox);
    console.log(obj);
  }, function(err) {
    console.log(err);
  });
}

var draw = function() {
  clear();
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(fox);
  // console.log(fox);
}

function resizeHandler() {
  resizeCanvas(windowWidth, windowHeight);
}

window.addEventListener('resize', resizeHandler);
