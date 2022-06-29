noseX=0;
noseY=0;
difference=0;
RightWristX=0;
LeftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(450, 450);
    video.position(300, 200);
    canvas=createCanvas(460, 450);
    canvas.position(850, 200);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("NoseX= "+noseX+ " and NoseY= "+noseY);
        RightWristX=results[0].pose.rightWrist.x;
        LeftWristX=results[0].pose.leftWrist.x;
        console.log("RightWristX= "+RightWristX+"LeftWristX= "+LeftWristX);
        difference=floor(LeftWristX=RightWristX);
        console.log("The difference is: "+ difference);
    }
}
function draw(){
    background('lightblue');
    word=document.getElementById("item").value;
    text(word, noseX, noseY);
    textSize(difference);
}