Array=["http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631270503687E03_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631120503672E01_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630940503654E02_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630690503629E02_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NRB_486270860EDR_F0481570NCAM00323M_.JPG"]
var random=Math.floor(Math.random()*7);
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image=Array[random];
rover_image="rover.png";
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);

}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=="38"){
        up();
        console.log("up");
    }
    if(keypress=="40"){
        down();
        console.log("down");
    }
    if(keypress=="37"){
        left();
        console.log("left");
    }
    if(keypress=="39"){
        right();
        console.log("right");
    }
}

function up(){
    if (rover_y>=0)
    {
        rover_y-=10;
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if (rover_y<=500)
    {
        rover_y+=10;
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if (rover_x>=0)
    {
        rover_x-=10;
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if (rover_x<=700)
    {
        rover_x+=10;
        uploadbackground();
        uploadrover();
    }
}