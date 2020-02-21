var video, volume, volumeSlider;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	volume = document.querySelector("#volume");
	volume.innerHTML=video.volume * 100 + '%';
	console.log("Play Video");
	console.log(video);
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate -= video.playbackRate * .2;
  console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate += video.playbackRate * .25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
		video.playbackRate = 1;
		playVid();
	}
	else{
		video.currentTime += 60
	}
	console.log("Current location is " + video.currentTime);
}

function mute() {
	if (video.muted){
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Changing to Unmuted");
		video.muted = false;
	}
	else{
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Changing to Muted");
		video.muted = true;
	}
}

function changeVolume() {
	volumeSlider = document.querySelector("#volumeSlider");
	video.volume = volumeSlider.value / 100;
	volume.innerHTML = volumeSlider.value + '%';
	console.log("Volume is " + volumeSlider.value + '%');
}

function gray() {
	video.classList.add('grayscale');
	console.log("In grayscale");
}

function color() {
	video.classList.remove('grayscale');
	console.log("In color")
}
