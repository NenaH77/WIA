window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {


        //get source img
        var srcImg = document.getElementById("img1");

        //set rotation
        var rotation = 0;

        //figure out where the middle of the canvas is and translate to there
        ctx.translate(theCanvas.width/2, theCanvas.height/2);


        setInterval(function(){

        rotation +=8;

        ctx.clearRect(-300, -300, theCanvas.width, theCanvas.height);

        ctx.rotate(rotation * (Math.PI / 180));
        //start drawing put image on canvas
        ctx.drawImage(srcImg, -75, -75);//html image is 150x150. if we wnt this centered we need to draw this 1/2 w & 1/2 h
        }, 300);
						
						
		}
	}
}