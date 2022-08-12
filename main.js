noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rigthWristX=0;


function setup(){
    video=createCapture(VIDEO);
    
    
    canvas=createCanvas(750,500);
    canvas.position(650,120);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,150,400,400);
    background('#FFA500');
    fill('#87CEEB');
    stroke('#FFD700');
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML="Width and Height of the square is "+difference+" px";
}

function modelLoaded(){
    console.log('posenet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX- "+noseX+" noseY- "+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=Math.floor(leftWristX-rightWristX);
        console.log("Left Wrist X- "+leftWristX+" Right Wrist X- "+rightWristX+" Difference Between Left and Right Wrist- "+difference);



    }

}