var video;

window.addEventListener("load", function() 
{
	console.log("Good job opening the window")
	video = document.querySelector('bandvid');
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function()
{
	console.log("Play Video");
	video.play();
	volume = document.querySelector("#slider").value;
	document.getElementById("volume").innerHTML = (video.volume * 100).toString() + '%';
});

document.querySelector("#pause").addEventListener("click", function()
{
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function()
{
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log("Video speed is now" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function()
{
	video.playbackRate = 0.9 * video.playbackRate;
	console.log("Speed video");
	console.log("Sped Down to" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function()
{
	console.log("Skip ahead in video");
	if(video.currentTime+10>=video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime+=10;
	}
	console.log("Current video time is" + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function()
{
	if(video.muted){
		video.muted = false;
		document.querySelector("#mute").textContent = 'Mute';
		console.log("Unmute");
	}
	else{
		video.muted = true;
		document.querySelector("#mute").textContent = 'Unmute';
		console.log("Mute");
	}
});

document.querySelector("#slider").addEventListener("click", function()
{
	video.volume = slider.value/100;
	document.getElementById("volume").innerHTML= video.volume*100+"%";
});

document.querySelector("#vintage").addEventListener("click", function() 
{
	video.className = 'oldSchool';
});

document.querySelector("#orig").addEventListener("click", function() 
{
	video.className = 'video';
});