let ball;
let ballcolor = {
  r: 0,
  g: 0,
  b: 0,
};
let ree;
let img;
let score;
let body;
let hasPlayed = false;
let trash;
let trashman;
let newtrash;
//let pics = ['danny.png', 'edrooney.png', 'stevie.png'];
let test = 'danny.png';
let cycle = -1;

var bg = {
  r: 0,
  g: 0,
  b: 0,
};
let x, y;

function preload() {
  //img = loadImage(pics[0]);
  // for (var i = 0; i < 2; i++) {
  //   img = loadImage(pics[i]);
  // }
  img = loadImage(test);
  trash = loadImage('trash.png');
	trashman = loadSound('trashman.mp3');
  body = loadImage('body.png');
}

function setup() {
  createCanvas(800, 700);
  imageMode(CENTER);
  x = width / 2;
  y = height / 2;
  frameRate(60);
  score = 0;
  //   img = loadImage(pics[0]);
  //print(pics);

  ball = new Ball(x, x);
  newtrash = new Trash(random(25,width-25),random(25,height-25));

}

function draw() {
  background(0, 204, 0);
  noStroke();
  textSize(50);
  fill(0);
  text('Trash: ' + score, width/2, 50);
  newtrash.show();

  if (ball.x + 25 >= newtrash.x - 25 && ball.x - 25 <= newtrash.x + 25 && ball.y+110 >= newtrash.y - 25 && ball.y -50 <= newtrash.y + 25) {
   newtrash = new Trash(random(25,width-25),random(25,height-25));
    score += 1;
    hasPlayed = false;
  }

  fill(255, 153, 255);
  angleMode(DEGREES);
  textAlign(CENTER);
  //rotate(45);
  //rect(0, 0, 600, 300);
  //rotate(-45);
  strokeWeight(2);

  ball.show();
  ball.move();
  if (0 >= x - 50 || width <= x + 50) {
    bg.r = random(0, 255);
    bg.g = random(0, 255);
    bg.b = random(0, 255);
  }

  if (0 >= y - 50 || height <= y + 143) {
    bg.r = random(0, 255);
    bg.g = random(0, 255);
    bg.b = random(0, 255);
  }

  if (keyIsDown(65) && 0 <= ball.x - 50) {
    ball.x -= 3;
    if (keyIsDown(16)) {
      ball.x -= 6;
    }
  }

  if (keyIsDown(68) && width >= ball.x + 50) {
    ball.x += 3;
    if (keyIsDown(16)) {
      ball.x += 6;
    }
  }

  if (keyIsDown(87) && 0 <= ball.y - 50) {
    ball.y -= 3;
    if (keyIsDown(16)) {
      ball.y -= 6;
    }
  }

  if (keyIsDown(83) && height >= ball.y + 143) {
    ball.y += 3;
    if (keyIsDown(16)) {
      ball.y += 6;
    }
  }

  if (score%10 == 0 && hasPlayed == false && score != 0) {
    trashman.play();
    hasPlayed = true;
  }

}
