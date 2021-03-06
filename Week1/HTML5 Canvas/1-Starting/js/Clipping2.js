window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        //create variables for x, y, radius & offset
        var x = theCanvas.width/2;
        var y = theCanvas.height/2;
        var radius = 75;
        var offset = 50;


        ctx.save();

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2*Math.PI, false);//2*Math.PI is to make a whole circle
        //ctx.stroke();
        ctx.clip();

        //draw a blue circle inside of the clipping mask
        ctx.beginPath();
        ctx.arc(x-offset, y-offset, radius, 0, 2*Math.PI, false);
        ctx.fillStyle = "blue";
        ctx.fill();


        //draw a yellow circle inside of the clipping mask
        ctx.beginPath();
        ctx.arc(x+offset, y, radius, 0, 2*Math.PI, false);
        ctx.fillStyle = "yellow";
        ctx.fill();

        //draw a red circle inside of the clipping mask
        ctx.beginPath();
        ctx.arc(x, y+offset, radius, 0, 2*Math.PI, false);
        ctx.fillStyle = "red";
        ctx.fill();

        ctx.restore();//cuz we saved (above) before we created a clipping mask, this will restore back to before we started using clipping mask

        //stroke the circle
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2*Math.PI, false);
        ctx.lineWidth = 10;
        ctx.strokeStyle = "blue";
        ctx.stroke();


		
     						
		}
	}
}