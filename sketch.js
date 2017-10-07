let theta = 0;
let pathx = [];
let pathy = [];

function setup() {
	w = 400;
	h = 400;
	createCanvas(w,h);
	background(0,150);
}

function draw() {
	background(0,150);
	stroke(255);
	ellipse (w/4,h/2,5);
	let ground = new link (w/4, h/2, 50);
	ground.calculateEnd(0);
	let crank = new link (w/4, h/2, 70);
	crank.calculateEnd(theta);
	let coupler = new link (crank.dx, crank.dy, 60);
	coupler.calculateEnd(0);
	let out = new output (coupler.dx,coupler.dy, ground.dx, ground.dy);
	out.show();
	coupler.show();
	crank.show();
	ground.show();
	theta += 0.01;
	console.log(frameRate());
}

function link (x , y, length){
	this.x = x;
	this.y = y;
	this.dx;
	this.dy;
	this.length =length;

	this.calculateEnd = function(angle){
			this.dx = this.x + this.length*cos(angle); 
			this.dy = this.y + this.length*sin(angle);
		}
	this.show = function() {
		line(this.x, this.y, this.dx , this.dy);
		}
	}

function output (x , y, xend, yend ){
	this.x = x;
	this.y = y;
	this.dx = xend;
	this.dy = yend;
	this.show = function() {
		line(this.x, this.y, this.dx , this.dy);
		if(this.x == pathx[0] && this.y == pathy[0]){
			pathx = [];
			pathy = [];
		}
		pathx.push(this.x);
		pathy.push(this.y);

		
	}
	
}
