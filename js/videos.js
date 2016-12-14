/**
 * Created by andrew on 12/13/16.
 */

// Set up Youtube
var player;
var width = ($(window).width())/12*7;
var height = (width/16) * 9;

// Youtube Controls
var beginagain = false;

$(document).ready(function(){
    //player.loadVideoById("IVx6ZlksMJw",0);
});

function onYouTubeIframeAPIReady(videoID) {
    player = new YT.Player('video-placeholder', {
        width: width,
        height: height,
        videoId: "IVx6ZlksMJw",
        playerVars: {
            color: 'white'
        },
        events: {
            'onReady': initialize
        }
    });
}
function initialize(){

    // Update the controls on load
    updateTimerDisplay();

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
    }, 1000)

}
function updateTimerDisplay(){
    // Update current time text display.
    if(player.getCurrentTime()>=player.getDuration()){
        nextVideo();
    }
}
function changeVideo(t){
    //FETCH ID FROM DATABASE
    player.loadVideoById("bHQqvYy5KYo", 5, "large");
}
function nextVideo(t){

}
function beginagain(){

}
function printDocument(){

}