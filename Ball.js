function Ball(x, y) {
  this.x = x;
  this.y = y;
  //this.r = r;


  this.show = function() {
		fill(0,0,0,60);
    ellipse(this.x,this.y+145,50,25,10);
    image(body, this.x + 5, this.y + 93, 100, 100);
    image(img, this.x, this.y, 100, 100);
  }

  this.move = function() {
    x += this.xVelocity;
    y += this.yVelocity;
    this.bounce();
  }

  this.bounce = function() {

    if (0 >= x - 50 || width <= x + 50) {
      this.xVelocity *= -1;
      bg.r = random(0, 255);
      bg.g = random(0, 255);
      bg.b = random(0, 255);
      ballcolor.r = random(0, 255);
      ballcolor.g = random(0, 255);
      ballcolor.b = random(0, 255);
    }

    if (0 >= y - 50 || height <= y + 143) {
      this.yVelocity *= -1;
      bg.r = random(0, 255);
      bg.g = random(0, 255);
      bg.b = random(0, 255);
      ballcolor.r = random(100, 255);
      ballcolor.g = random(100, 255);
      ballcolor.b = random(100, 255);
    }


  }
}
