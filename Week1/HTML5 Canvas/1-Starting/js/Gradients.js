window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
	
		//Create a linear gradient
        //createLinearGradient(x0,y0, x1,y1)

        var linGrd = ctx.createLinearGradient(20, 20, 220, 20);
        //different angles: (20, 20, 20, 280) or (20, 20, 220, 280)

        //add color stops
        linGrd.addColorStop(0, "#f00");
        linGrd.addColorStop(.5, "#00f");
        linGrd.addColorStop(1, "#0f0");

        //create rectangle
        ctx.fillStyle = linGrd;
        ctx.fillRect(20, 20, 200, 280);

		//create radial gradient
        //createRadialGradient(x0, y0, r0, x1, y1, r1)
        var radGrad = ctx.createRadialGradient(525, 150, 20, 525, 150, 100);//(450, 150, 20, 525, 150, 100) or(525, 100, 20, 525, 150, 100);

        //color stops
        radGrad.addColorStop(0, "#f00");
        radGrad.addColorStop(.5, "#00f");
        radGrad.addColorStop(1, "#0f0");

        ctx.fillStyle = radGrad;
        //draw circle
        ctx.beginPath();
        ctx.arc(525, 150, 100, 0, 2*Math.PI);//center or x-coordinates, y-coordinates, radius, starting angle..to have it go all the way around use Math.PI
        ctx.fill();


		}
	}
}