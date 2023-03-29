const video = document.querySelector("#player1");
video.autoplay = false;
video.loop = false;

const playBtn = document.querySelector("#play");
playBtn.addEventListener("click", playVideo);

const pauseBtn = document.querySelector("#pause");
pauseBtn.addEventListener("click", pauseVideo);

const slowDownBtn = document.querySelector("#slower");
slowDownBtn.addEventListener("click", slowDownVideo);

const speedUpBtn = document.querySelector("#faster");
speedUpBtn.addEventListener("click", speedUpVideo);

const skipBtn = document.querySelector("#skip");
skipBtn.addEventListener("click", skipAhead);

const muteBtn = document.querySelector("#mute");
muteBtn.addEventListener("click", muteVideo);

const volumeSlider = document.querySelector("#slider");
volumeSlider.addEventListener("input", changeVolume);

const volumeInfo = document.querySelector("#volume");


function playVideo() 
{
    video.play();
    const volumePercent = (video.volume * 100).toFixed(0);
    volumeInfo.textContent = volumePercent + "%";
}


function pauseVideo() 
{
    video.pause();
}

function slowDownVideo() 
{
    video.playbackRate -= 0.1;
    console.log(`Videos New Speed Is: ${video.playbackRate}`);
}

function speedUpVideo() 
{
    const newSpeed = video.playbackRate + (0.1 * video.playbackRate);
    video.playbackRate = newSpeed;
    console.log(`Video's New Speed Is: ${newSpeed}`);
}

function skipAhead() 
{
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log(`Video's Current Time Is: ${video.currentTime}`);
}

function muteVideo() 
{
    if (video.muted) {
        video.muted = false;
        muteBtn.textContent = "Mute";
    } else {
        video.muted = true;
        muteBtn.textContent = "Unmute";
    }
}

function changeVolume() 
{
    video.volume = volumeSlider.value / 100;
    volumeInfo.textContent = `${volumeSlider.value}%`;
}


const oldSchoolBtn = document.querySelector("#vintage");
oldSchoolBtn.addEventListener("click", addOldSchoolClass);

const originalBtn = document.querySelector("#orig");
originalBtn.addEventListener("click", removeOldSchoolClass);

function addOldSchoolClass() 
{
    video.classList.add("oldSchool");
}


function removeOldSchoolClass() 
{
    video.classList.remove("oldSchool");
}
