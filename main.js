function preload(){

}
function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110,250);
    webcam=createCapture(VIDEO);
    webcam.hide();

    set_tint="";
}

function draw(){
 image(webcam,0,0,640,480);
 tint(set_tint);
}
function take_snapshot(){
    save("filter_image.png");

}

function set_color(){
    set_tint=document.getElementById("color").value;
}