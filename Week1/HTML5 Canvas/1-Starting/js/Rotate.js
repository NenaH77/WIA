window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        /*
        ctx.fillStyle = "blue";
        ctx.fillRect(150, 50, 100, 50);


        ctx.translate(200, 75);
        ctx.rotate(.5);//radiant
        ctx.fillStyle ="red";
        ctx.fillRect(-50, -25, 100, 50);
        */

        /*Notice the blue and red box are in different locations. If they both
          have the same x&y coordinates they should both be in the same location
          How do we change this? Find the center of the Rectangle. We know the blue
          rectangle is at 150x and 50y so we know the width of the rec is going to be
          1/2 of the width of the rectangle and 1/2 the height of the rectangle.
          150x + (100width/2) = 200         50y + (50h/2) = 75

          Now we need to look at the negative width and  negative height coordinates in our ctx.fillRect.
          -100w/2 = -50x
          -50h/2 = -25y
          This gives us ctx.fillRect(-50, -25, 100, 50);

          */

        /*
        //starburst pattern
        var radians = (Math.PI/180)*20;
        ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);

        for(var degrees=0; degrees<360; degrees+=20){

            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(100, 0);
            ctx.stroke();
            ctx.rotate(radians);
        }
        */

        //1/2 starburst pattern
        var radians = (Math.PI/180)*20;
        ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);

        for(var degrees=0; degrees<=180; degrees+=20){

            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(100, 0);
            ctx.stroke();
            ctx.rotate(radians);
        }

		}
	}
}