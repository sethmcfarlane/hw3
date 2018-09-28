function setup() {
  createCanvas(400, 200);
  colorMode(HSB, 360, 100, 100, 100);
  background(193, 10, 100);
}

var x = 0;
var h = 10;
var mPos = -251;


function draw() {
  strokeWeight(1);
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x + random(-10, 10), height-10-random(h));

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  
	if (h > 40) {
    noStroke();
    if (random() > .95){
    fill (330, 40, random(80, 100));
    ellipse(x, height-10-random(h-20,h-18), random(2, 5));
    fill (214, 40, random(80, 100));
    ellipse(x, height-10-random(h-20,h-18), random(2, 5));
    }

  }
    if (h > 80) {
      noStroke();
      fill (193, 10, 100);
      rect(mPos - 500, 0, 700, 190);
    	fill (40, 0, 28);
    	rect(mPos, 125, 250, 60, 10, 10);
      fill (40, 0, 0);
      ellipse(mPos + 200, 170, 40);
      fill (40, 0, 0);
      ellipse(mPos + 50, 170, 40);
      stroke(40, 0, 0)
      strokeWeight(8);
      line(mPos+20, 140, mPos-100, 0);
      
     	 if (mPos < 510){
      		mPos = mPos + 3;
       }
          
      	else{
    			h = 10;
          mPos = -251;
     	 }
  }
  noStroke();
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
  
}
