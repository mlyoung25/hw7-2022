var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
    //Initialize the video element and turn off autoplay and turn off looping.
    video = document.querySelector("#player1");
    video.autoplay = false;
	console.log("Auto play is set to " + video.autoplay);
    video.loop = false;
	console.log("Loop is set to " + video.autoplay);
});

 document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
   	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
   	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= .9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= .9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Current location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Mute");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Unmute");
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Current volume is " + video.volume);
});
