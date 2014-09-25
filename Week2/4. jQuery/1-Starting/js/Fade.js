$(function() { 
	
	$('#fadeout').click(function(){
        $('#theDiv').fadeOut('normal');
    });

    $('#fadein').click(function(){
        $('#theDiv').fadeIn(2000);
    });

    $('#fadeto3').click(function(){
        $('#theDiv').fadeTo(200, .3);
    });
    $('#fadeup').click(function(){
        $('#theDiv').fadeTo(200, 1, function(){
            alert('The Div is back to 100% capacity');
        });

    });


            
});