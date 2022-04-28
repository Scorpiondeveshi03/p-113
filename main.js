function preload() {
   
}

function setup() {
   canvas = createCanvas(640,480);
   canvas.position(110,250);
   video = createCapture(VIDEO);
   video.hide();
   

}

function draw() {
   image(video, 0, 0, 640 , 480);
   
   stroke(168, 10, 10);
   fill(168, 10, 10);
  
   circle(40,40,50);
   circle(460,40,50);
   circle(40, 360, 50);
   circle(460,360,50);

   stroke();
   fill()
}

function take_snapshot() {
   save('pic.png');
}