/**
 * Created by NenaH77 on 8/11/14.
 */

$(document).ready(function(){

    $('#mapForm').change(function(){

        var selectedContinent = $('#mapForm option:selected').val();

        if(selectedContinent == 'ALL'){
            $('a.dot').show(1000);
        }else{
            $('a.dot[continent *="'+selectedContinent+'"]').show(1000);
            $('a.dot[continent !="'+selectedContinent+'"]').hide(1000);
        }
    });

    $('a.dot').click(function(){

        //alert( $(this).attr('city')  );
//removing the green dot that's been selected and adding 1 active selected green dot
        $('a.dot').removeClass('selected');
        $(this).addClass('selected');
/* we're setting up a string that's going to target the city detail with an ID of whatever city name
value matches the ID inside of the city detail, and this relates to all of the IDs in the hidden HTML that matches
the city attributes */
        var city = '.city_detail#'+$(this).attr('city');
        var htmlCode = $(city).html();

        $('.detail_container').fadeOut(500, function(){
            $('.detail_container .city_detail').html(htmlCode);
            $('.detail_container').fadeIn(500);
        });

    });



});