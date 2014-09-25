//create variable to hold our video
var vid;

window.onload=function(){

    //link to video
    vid = document.getElementById("vid");
}

function pauseToggle(){

    //test video and determine if its paused
    //.paused is a boolean property

    if(vid.paused){
        //play the video
        vid.play();
    }else{
        //pause the video
        vid.pause();
    }
}

function clicked(){
    //currentTime = current play time in secs

    //jump ahead 2 seconds

    vid.currentTime +=2;




}