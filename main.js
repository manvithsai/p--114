function preload(){
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('poseNet is loaded');
}
function draw(){
image(video,0,0,400,400);
}
function draw(){
}
function take_snapshot(){
    save('manvith.jpg');
}
function gotposes(results){
if(results.lenght>0){
console.log(results);
console.log("nose X ="+results[0].pose.nose.X);
console.log("nose Y ="+results[0].pose.nose.Y)
}
}
