function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function preload(){
    img=loadImage('bed.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("Bed" ,45,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);
}