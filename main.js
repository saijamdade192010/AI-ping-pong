rightWristX = "";
rightWristY = "";

rigthWrist_Score = "";

function setup() {
    canvas = createCanvas(800,400);
    canvas.parent("canvas");

    video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        rigthWrist_Score = results[0].pose.keypoints[10].score;
    }
}

function draw(){
    if(scoreRightWrist > 0.2)
    {
      fill("blue");
      stroke("pink");
      circle(rightWristX, rightWristY, 30);
    }
}