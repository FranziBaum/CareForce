
let fox;
let ready = false;

function loadHandler() {
  let context = new p5();
  // context.createCanvas(windowWidth, windowHeight, WEBGL);
  // context.frameRate(30);

  context.setup = function() {
    console.log("Setup");

    context.createCanvas(windowWidth, windowHeight, WEBGL);
    context.frameRate(30);
  }

  context.preload = function() {
    console.log("Hello World");
    fox = loadModel('fox.obj', true, function(obj) {
      ready = true;
      console.log("Hello");
      console.log(fox);
      console.log(obj);
    }, function(err) {
      console.log(err);
    });
  }

  context.draw = function() {
    if (ready) {
      clear();
      background(200);
      rotateX(context.frameCount * 0.01);
      rotateY(context.frameCount * 0.01);
      model(fox);
    }
    // console.log(fox);
  }
}

function resizeHandler() {
  resizeCanvas(windowWidth, windowHeight);
}

window.addEventListener('resize', resizeHandler);
window.addEventListener('load', loadHandler)
