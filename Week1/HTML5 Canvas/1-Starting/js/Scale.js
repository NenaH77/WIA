window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        ctx.save();
        ctx.fillStyle = "blue";
        ctx.fillRect(0,0, 100, 50);//100 right, 50 height

        //scale transform
        ctx.scale(1.5, 2);//1.5 wider, 2x taller
	    ctx.fillRect(0, 50, 100, 50);// 0, 50(down), 100(), 50()


        ctx.restore();
        //create a 3rd rectangle
        ctx.fillStyle ="purple";
        ctx.scale(.5,.5);
        ctx.fillRect(0, 100, 100, 50);
						
		}
	}
}