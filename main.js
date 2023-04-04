function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    }
}
function modelLoaded(){
    console.log("PoseNet has been loaded.")
}
function draw(){
    background('#5A5A5A');
}