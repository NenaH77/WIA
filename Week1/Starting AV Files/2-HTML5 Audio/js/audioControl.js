//create variable
var aud

window.onload = function(){

    aud = document.getElementById("audio");
}

function clicked(){
    aud.currentTime +=1;
}