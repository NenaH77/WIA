if(Modernizr.canvas){
    //canvas is supported

    var theCanvas = document.getElementById("Canvas1");
    var ctx = theCanvas.getContext("2d");

    //draw text on canvas
    ctx.font = "25pt Georgia";
    ctx.fillText("Canvas is supported!", 20, 60);

    }else{

    //canvas is not supported
    //polyfill would go here


}

console.log(Modernizr);

if(Modernizr.draganddrop){
    ctx.font = "25pt Georgia";
    ctx.fillStyle ="purple";
    ctx.fillText("Drag and Drop works!", 20, 120);
}else{
    //polyfills would go
}