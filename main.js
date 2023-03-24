noseX=0;
noseY=0; 

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture("VIDEO");
    video.size(400, 400);
    video.hide();
    model = ml5.poseNet(video, modelLoaded);
    model.on('pose', fetcher);
}
function modelLoaded() {
    console.log("Model is working");
}
function fetcher(results){
    if (results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log(noseX,noseY);
    }

}
function draw() {
    image(video, 0, 0, 400, 400);
}
function takesnapshot(){
    save("Best App's Image.png");
}