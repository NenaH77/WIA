window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {


        ctx.save();

        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 100, 50);//100px to the right, 50 px down

        //translate the origin to the middle of the canvas
        ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);//finds the middle of the canvas

        ctx.fillRect(-50, -25, 100, 50);
        ctx.restore();
        //ctx.translate(-ctx.canvas.width/2, -ctx.canvas.height/2);
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 100, 50);

        /* to properly undo having added the rectangle in the middle is to add save(); to the top
          of the drawing. Reason for this is because before we start drawing, the original (which is nothing) is saved
          before the ctx.fillRect() we need to add restore();
          How do we put the square in the center of the thing we're going to be building?
          The way to get it completely centered is to get 1/2 the width and 1/2 the height
          ex ctx.fillRect(0,0,100,50) instead we write(-50, -25, 100, 50); 50/2 = 25 */
			
						
		}
	}
}