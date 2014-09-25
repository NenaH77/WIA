//load different scripts based on our tests
//modernizr.load

Modernizr.load({

    test: Modernizr.inputtypes.date,
    yep:"js/success.js",
    nope:"js/fail.js",
    complete: function(){
        //this will run after the js file is loaded based on the case

        console.log("The test is complete");

    }
});