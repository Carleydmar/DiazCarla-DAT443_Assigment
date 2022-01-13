var squareCount, img, song;

const cloudsSkyCount = 6;
const size = 80;
const speed = 5;

const rainDropsCount = 1000;
const sizeRainDrops = 2;
const gravity = 5;

var cloudsSky = [];
var rainDrops = [];

function preload(){
    img = loadImage('img/plane.png');
    song = loadSound('assets/audio_file.mp3');
}

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    squareCount = 45;

    var song = new Audio("assets/audio_file.mp3");
    song.play();

    for(let k = 0; k < cloudsSkyCount; k++){

        cloudsSky.push({
            x: random(width),
            y: random(0, 540),
        });
        console.log(cloudsSky);
    }
    for(let l = 0; l < rainDropsCount; l++){
        
        rainDrops.push({
            x: random(width),
            y: random(height),
        });
        console.log(rainDrops);
    }
}

function draw() {
    background(220);

    background(76, 120, 143);

    //ground
    fill(15, 102, 0);
    rect(0, 600, 800, 60);

    for(let i = 37; i < squareCount; i++){
        for(let j = 0; j < squareCount; j++){
            stroke(1);
            fill(102, 48, 0)
            rect(0 + j * width/squareCount, 0 + i * height/squareCount, width/squareCount, height/squareCount);
        }
    }

    //clouds
    for(let k = 0; k < cloudsSky.length; k++){
        var cloudssky = cloudsSky[k];

        noStroke();
        fill(126, 166, 196);
        ellipse(cloudssky.x, cloudssky.y, size, size);
        ellipse(cloudssky.x + 25, cloudssky.y + 10, size, size - 30);
        ellipse(cloudssky.x - 30, cloudssky.y - 8, size, size - 40);
        ellipse(cloudssky.x - 25, cloudssky.y + 12, size, size - 25);

        if(cloudssky.x > height + size){
            cloudssky.x = -size;
        } else {
             cloudssky.x += speed;
        }
    }
    
    if(mouseIsPressed == true){
        image(img, mouseX, mouseY, 350, 350);
    }

    //rain
    for(let l = 0;  l < rainDrops.length; l++){
        var raindrops = rainDrops[l];
  
        ellipse(raindrops.x, raindrops.y, sizeRainDrops);
  
        if(raindrops.y > height + size){
          raindrops.y = -sizeRainDrops;
        } else {
          raindrops.y += gravity;
        }
    }
}