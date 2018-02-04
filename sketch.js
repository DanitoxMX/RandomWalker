var WIDHT = 600, HEIGTH = 600;
var x = WIDHT / 2, y = HEIGTH / 2;
var rnd

function setup() {
	createCanvas(WIDHT, HEIGTH);
	background(100);
	strokeWeight(10);
}

function draw() {
	stroke(255, 0, 0);
	point(x , y);
	
	rnd = floor(random(4));
	
	switch(rnd){
		case 0:
			y--;
			break;
		case 1:
			x++;
			break;
		case 2:
			y++;
			break;
		case 3:
			x--;
			break;
	}
	
	stroke(255);
	point(x, y);
}