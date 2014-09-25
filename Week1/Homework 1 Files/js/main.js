/*
     Name: Angelica Dinh
     Date: Aug 6, 2014
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */

window.onload = function(){
/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/
if(Modernizr.canvas){
    var myCanvas1 = document.getElementById("c1"),
        ctx1 = myCanvas1.getContext("2d");

    var myCanvas2 = document.getElementById("c2"),
        ctx2 = myCanvas2.getContext("2d");

    var myCanvas3 = document.getElementById("c3"),
        ctx3 = myCanvas3.getContext("2d");

    var myCanvas4 = document.getElementById("c4"),
        ctx4 = myCanvas4.getContext("2d");

    var myCanvas5 = document.getElementById("c5"),
        ctx5 = myCanvas5.getContext("2d");

    var myCanvas6 = document.getElementById("c6"),
        ctx6 = myCanvas6.getContext("2d");

    var myCanvas7 = document.getElementById("c7"),
        ctx7 = myCanvas7.getContext("2d");

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
if(myCanvas1 && ctx1){
    ctx1.strokeStyle = "black";
    ctx1.fillStyle = "blue";

    ctx1.fillRect(0,0,50,100);
    ctx1.strokeRect(0,0,50,100);
}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

if(myCanvas2 && ctx2){
    ctx2.strokeStyle = "black";
    ctx2.fillStyle = "rgba(255, 0, 0, .5)";

    ctx2.beginPath();
    ctx2.arc(50, 50, 20, 0, 2*Math.PI, false);
    ctx2.fill();

    ctx2.beginPath();
    ctx2.arc(50, 50, 30, 0, 2*Math.PI, false);
    ctx2.stroke();
}

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
if(myCanvas3 && ctx3){
    ctx3.strokeStyle = "grey";
    ctx3.fillStyle = "yellow";
    ctx3.beginPath();

    ctx3.moveTo(100, 100);
    ctx3.lineTo(210, 100);
    ctx3.lineTo(250, 40);
    ctx3.lineTo(290, 100);
    ctx3.lineTo(400, 100);
    ctx3.lineTo(300, 150);
    ctx3.lineTo(350, 250);
    ctx3.lineTo(250, 185);
    ctx3.lineTo(150, 250);
    ctx3.lineTo(200, 150);
    ctx3.lineTo(100, 100);

    ctx3.closePath();
    ctx3.fill();
    ctx3.stroke();
}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
if(myCanvas4 && ctx4){

        ctx4.beginPath();
        ctx4.arc(200,150,105,Math.PI,0);
        ctx4.strokeStyle = 'black';
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.lineWidth = 1;
        ctx4.moveTo(95,150);
        ctx4.bezierCurveTo(95, 150, 132, 120, 167, 150);
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.lineWidth = 1;
        ctx4.moveTo(167,150);
        ctx4.bezierCurveTo(167, 150, 197, 120, 232, 150);
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.lineWidth = 1;
        ctx4.moveTo(232,150);
        ctx4.bezierCurveTo(232, 150, 267, 120, 305, 150);
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.lineWidth = 4;
        ctx4.moveTo(200,138);
        ctx4.bezierCurveTo(200, 138, 200, 270,175, 210);
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.lineWidth = 1;
        ctx4.moveTo(200,45);
        ctx4.bezierCurveTo(200, 45, 160, 82.5, 167,150 );
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.lineWidth = 1;
        ctx4.moveTo(200,45);
        ctx4.bezierCurveTo(200, 45, 240, 82.5, 233,150 );
        ctx4.stroke();
    }

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
if(myCanvas5 && ctx5){

    var text = "Hello World";

    ctx5.shadowColor ="#000";
    ctx5.shadowBlur = 8;
    ctx5.shadowOffsetX = 7;
    ctx5.shadowOffsetY = 7;
    ctx5.font = "2.5em Verdana";
    ctx5.fillStyle = "#ff0080";
    ctx5.strokeStyle ="#d3d3d3";
    ctx5.textBaseline = "middle";
    ctx5.fillText(text, 8, 70);
    ctx5.strokeText(text, 8, 70);


}
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
if(myCanvas6 && ctx6){

    var img = document.getElementById("logo");
    ctx6.drawImage(img, 0, 0);
    ctx6.drawImage(img, 0, 1088, 1650, 544);
    ctx6.drawImage(img, 280, 600, 470, 420, 0, 2000, 240, 400);

}

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

if(myCanvas7 && ctx7){


//caption
    var caption = "Great Sunny Days!";
    ctx7.font = "16pt Helvetica";
    ctx7.fillStyle = "rgb(204, 85, 0)";
    ctx7.strokeStyle ="rgb(204, 85, 0)";
    ctx7.fillText(caption, 20, 70);
    ctx7.strokeText(caption, 20, 70);


//lines
    ctx7.strokeStyle="#330033";
    ctx7.shadowColor = "#808080";
    ctx7.shadowBlur = "8";
    ctx7.shadowOffsetX = "7";
    ctx7.shadowOffsetY ="7";

var radians=(Math.PI/180)*20;
ctx7.translate(ctx7.canvas.width/4, ctx7.canvas.height/4);
for(var degrees=0; degrees<=360; degrees+=20){
    ctx7.beginPath();
    ctx7.moveTo(10, 25);
    ctx7.lineTo(110, 50);
    ctx7.stroke();
    ctx7.rotate(radians);
}
//sun
    ctx7.shadowColor = "#808080";
    ctx7.shadowBlur = "8";
    ctx7.shadowOffsetX = "7";
    ctx7.shadowOffsetY ="7";

    var degrees = 360;
    var radians2 = (degrees/180)*Math.PI;
    ctx7.beginPath();
    ctx7.arc(0, 0, 60, 0, radians2);
    ctx7.fillStyle = "yellow";
    ctx7.fill();
    ctx7.stroke();

}
}
}

