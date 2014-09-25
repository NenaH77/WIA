/**
 * Created by NenaH77 on 8/16/14.
 */

$(window).ready(function(){
    $(document).ready(function () {
        $('.myGallery').each(function (i, el) {
            $(el).justifiedGallery({rel: 'gal' + i}).on('jg.complete', function () {
        if (i == 1) $('.myGallery a').swipebox(); //swipebox, wants to be called only once to work properly
        });
    });
    });


});

