/**
 * Created by NenaH77 on 8/11/14.
 */

//Canvas 1
window.onload = function(){
    var theCanvas = document.getElementById('Canvas');
    if(theCanvas && theCanvas.getContext){
        var ctx = theCanvas.getContext('2d');
        if(ctx){
            var heading = 'What do you heart?';
            ctx.font = '25pt Baskerville';
            ctx.fillStyle = '#9f800f';
            ctx.strokeStyle = 'rgba(69, 56, 7, .8)';
            ctx.textBaseline = 'top';
            ctx.fillText(heading, 25, 50);
            ctx.strokeText(heading, 25, 50);
        }
    }
};

//Canvas 2
    var theCanvas2 = document.getElementById('Canvas1');
    if(theCanvas2 && theCanvas2.getContext){
        var ctx1 = theCanvas2.getContext('2d');
        if(ctx1){

            var linGrd = ctx1.createLinearGradient(100, 75, 180, 50);
            linGrd.addColorStop(0, "#ffd1dc");
            linGrd.addColorStop(.50, "#ff6f91");
            linGrd.addColorStop(1, "#ff85a2");
            ctx1.fillStyle = linGrd;

            ctx1.beginPath();
            ctx1.moveTo(75,40);
            ctx1.bezierCurveTo(75,37,70,25,50,25);
            ctx1.bezierCurveTo(20,25,20,62.5,20,62.5);
            ctx1.bezierCurveTo(20,80,40,102,75,120);
            ctx1.bezierCurveTo(110,102,130,80,130,62.5);
            ctx1.bezierCurveTo(130,62.5,130,25,100,25);
            ctx1.bezierCurveTo(85,25,75,37,75,40);
            ctx1.fill();
            ctx1.stroke();

            var cafeSospenso = 'I' + "               " + 'Cafe Sospeso';
            ctx1.font = '25pt Baskerville';
            ctx1.fillStyle = '#9f800f';
            ctx1.strokeStyle = 'rgba(69, 56, 7, .8)';
            ctx1.textBaseline = 'middle';
            ctx1.fillText(cafeSospenso, 0, 70);
            ctx1.strokeText(cafeSospenso, 0, 70);
        }
    }

//jQuery 1
$('#chart').hide();
$('#fadeChart').click(function(){
    $('#chart').fadeTo(500, 1);

});

//jQuery 2
$('#image').hide();
$('#gallery').click(function(){
    $('#image').slideToggle(1500);
});

//google chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Coffee Shops', 'Length'],
        ['Caffe Sospenso', 46.6],
        ['Starbucks', 40.1],
        ['Houndstooth Coffee', 38.5],
        ['Happy Coffee Co.', 38.2],
        ['Ipsento', 34.7],
        ['Boxcar Coffee', 31.2],
        ['Joe Bean', 29.1],
        ['Café D’Bolla', 27.4],
        ['Cognoscenti', 23.5],
        ['Render Coffee', 22.9],
        ['Gimme! Coffee', 21.2],
        ['Sqirl', 18.9],
        ['Bad Wolf Coffee', 18.3],
        ['Kaffe 1668', 16.3],
        ['Daylight Mind', 15.2],
        ['Intelligentsia Coffee', 15.2],
        ['Abraço Espresso', 14.9],
        ['Coava Coffee', 14.2],
        ['Jubala', 13.9],
        ['The Chipped Cup', 10.2],
        ['Barista Parlour', 10.9],
        ['Caffé Medici', 11.2],
        ['Fourbarrel', 13.2],
        ['Commonplace Coffee Co. House and Roasters', 9.4],
        ['Stumptown', 8.2],
        ['Octane Coffee', 13.6],
        ['Verve Coffee Roasters', 29.1],
        ['Joe Coffee', 18],
        ['Barista', 2.7],
        ['G&B', 25.2],
        ['Volta Coffee', 3.1],
        ['Budin', 7.8],
        ['Peets Brewed Coffee', 18.2],
        ['Caribou Coffee', 10.9],
        ['Dutch Bros. Coffee', 3.9],
        ['Seattle"s" Best', 2.6],
        ['Dunkin Donut', 2.0],
        ['McDonald"s"', 1.6]
    ]);

    var options = {
        title: 'What Coffee Name Do You Prefer?',
        legend: { position: 'labeled' },
        colors:['#c7b162']
    };

    var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
    chart.draw(data, options);
}








