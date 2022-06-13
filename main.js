var noseX = 0;
var noseY = 0;
var difference = 0;
var leftWristX = 0;
var rightWristX = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 460);
    canvas.position(600, 190);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#008080');
    textSize(difference/2);
    fill('white');
    text("Ahana", noseX, noseY);
}


function modelLoaded() {
    console.log("Posenet Model is Initialized.");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
    }
}