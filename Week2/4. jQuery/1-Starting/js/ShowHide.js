$(function() { 

    //Add a click function to our button
    $('#hide').click(function(){
        $('#theDiv').hide(900, function(){//string 'fast', 'normal', 'slow' or ms [4sec]4000, [.5sec]500
            //creating a callback
            alert('div is now hidden');
            $('#theDiv').css('background-color', "red");
        });
    });

    $('#show').click(function(){
        $('#theDiv').show(900);

    });

    $('#toggle').click(function(){
        $('#theDiv').toggle('slow');

    });


});


