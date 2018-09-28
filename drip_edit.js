var x = 230;
var y = 220;
var acc = y
var light = y*.5
//var acc = 1;

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  fill (0, 0, 100);
  rect(0, 200, x, 20);
  
  // draw drip
  colorMode(HSB);
  fill(204,light,100);
  ellipse(x, y, 10);
  
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + acc;
  //dropPos = y;
  acc = (y - 219)/7;
  //console.log(acc);
  light = y-220;
  //print(light);
  
  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
    //dropPos = y;
    acc = y - 217;
  }
}
