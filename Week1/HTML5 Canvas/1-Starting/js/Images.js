window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {


        //create variable to hold image
        var srcImg = document.getElementById("img1");

        //draw image directly onto the canvas
        //ctx.drawImage(srcImg, 0, 0);

        //draw scaled down image
        //drawImage(srcImg, dx, dy, dw, dh);
        //ctx.drawImage(srcImg, 50, 50, 240, 300);

        //draw a slice image
        //drawImage(srcImg, sx,sy, sw,sh, dx,dy, dw,dh);
        ctx.drawImage(srcImg, 285, 40, 95, 140, 50, 50, 190, 280);//95 * 2 = 190   140 * 2 = 280

        //create a variable that holds video
        //var srcVid = document.getElementById("vid1");
        //srcVid.play();

        //to get video on our screen
        //setInterval(function, Time-ms);

        //setInterval(function(){

            //use our drawing image --call our drawing
            //ctx.drawImage(srcVid, 0, 0, 480, 270);

        //}, 30);


     						
		}
	}
}