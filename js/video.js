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
	//Play the video and update the volume information.  
	video = document.querySelector("#player1");
	console.log("Play Video");
   	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
   	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	//Pause the video.
	video = document.querySelector("#player1");
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	//Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
	video = document.querySelector("#player1");
	console.log("Slow Down Video");
	video.playbackRate *= .9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	//Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
	video = document.querySelector("#player1");
	console.log("Speed Up Video");
	video.playbackRate /= .9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	//Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
	video = document.querySelector("#player1");
	console.log("Skip Ahead");
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	//Mute/unmute the video and update the text in the button.
	video = document.querySelector("#player1");
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmute");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute");
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	//Change the volume based on the slider and update the volume information.
	video = document.querySelector("#player1");
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("The current value is " + video.volume);
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	//Utilize the existing oldSchool class on the video element
	video = document.querySelector("#player1");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	//Remove the oldSchool class from the video.
	video = document.querySelector("#player1");
	video.classList.remove("oldSchool");
});

// Path: js/video.js
