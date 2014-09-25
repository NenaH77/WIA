window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        var theString = "Drawing text on a canvas";

        //simple text suing defaults
        ctx.fillText(theString, 20, 20);

        //style font
        ctx.font ="25pt Georgia";
        ctx.fillText(theString, 20, 60);

        //fill style
        ctx.fillStyle = "blue";
        ctx.fillText(theString, 20, 90, 80); //max width

        //stroke and fill text
        ctx.font = "32pt Verdana";
        ctx.fillStyle = "yellow";
        ctx.textBaseline = "middle";
        ctx.strokeStyle = "rgba(0, 255, 0, .8)";
        ctx.fillText(theString, 20, 160);
        ctx.strokeText(theString, 20, 160);
		}
	}
}