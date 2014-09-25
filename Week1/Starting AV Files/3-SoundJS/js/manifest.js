window.onload = function() {


    if(!createjs.Sound.initializeDefaultPlugins()){return};

    //create a variable to hold our path to audio files

    var audioPath = "audio/";

    //create array of objects, each obj is sound, music
    //Soundjs calls that a manifest

    var manifest = [
    {id:"Music", src:audioPath+"music.mp3|"+audioPath+"music.ogg"},
    {id:"Thunder", src:audioPath+"Thunder1.mp3|"+audioPath+"Thunder.ogg"}
    ];

    //register manifest with SoundJS
    createjs.Sound.registerManifest(manifest);

     //listen for the files to load
    createjs.Sound.addEventListener("fileload", handleLoad);

    function handleLoad(event){
        //this will run ONCE ea time a file is initially loaded
        //playing the file
        //createjs.Sound.play(event.src);

    }
	
}

function playMusic(){
    //play just the music
    createjs.Sound.play("Music");
}

function playThunder(){
    //play just the Thunder
    createjs.Sound.play("Thunder");
}