window.onload = function() {
	
	//test and make sure sound is working
    if(!createjs.Sound.initializeDefaultPlugins()){return};

    //setup how it works
    //soundjs has the ability to preload sounds
    createjs.Sound.registerSound({id:"soundId", src:"audio/music.mp3|audio/music.ogg"});//no spaces allowed between mp3|audio

    //listen for the file to load
    createjs.Sound.addEventListener("fileload", handleFileLoad);

    function handleFileLoad(event){
        //A sound has been loaded
        //once per every sound loaded
        console.log("preloaded:", event.src);

        //play the loaded sound
        //createjs.Sound.play(event.src);
    }
	
}

function playMusic(){

    //Play the sound when button is clicked
    createjs.Sound.play("soundId");



}
