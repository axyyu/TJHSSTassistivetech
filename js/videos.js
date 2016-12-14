/**
 * Created by andrew on 12/13/16.
 */

// Dictionary
var dictionary = {
    "0":"",
    "1":"",
    "2":"",
    "3":"",
    "4":"",
    "5":"",
    "6":"",
    "7":"",
    "8":"",
    "9":"",
    "10":"",
    "11":"",
    "12":"",
    "13":"",
    "14":"",
    "15":"",
    "16":"",
    "17":"",
    "18":"",
    "19":"",
    "20":"",
    "21":"",
    "22":"",
    "23":"",
    "24":"",
    "25":"",
    "26":"",
    "27":"",
    "28":"",
    "29":"",
    "30":"",
    "31":"",
    "32":"",
    "33":"",
    "34":"",
    "35":"",
    "36":"",
    "37":"",
    "38":"",
    "39":"",
    "40":"",
    "41":"",
    "42":"",
    "43":"",
    "44":"",
    "45":"",
    "46":"",
    "47":"",
    "48":"",
    "49":"",
    "50":"",
    "51":"",
    "52":"",
    "53":"",
    "54":""
};


// Set up Youtube
var player;
var width = ($(window).width())/12*7;
var height = (width/16) * 9;

// Youtube Controls
var beginAgain = false;

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
function zoomIn(){

}
function zoomOut(){

}