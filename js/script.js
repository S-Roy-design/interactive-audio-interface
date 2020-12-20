
let doveCallAudio = document.querySelector(`#doveAudio`)
let duckCallAudio = document.querySelector(`#duckAudio`)
//let audio = new Audio(`audiofilelinkfromtheweb`) but this is not as accessible
let audio = new Audio(`https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-free-to-use-sounds/ftus_animals_birds_seagulls_early_morning_sunrise_ocean_waves_caribbean.mp3?_=1`)

let playBtn = document.querySelector(`#play`)
let pauseBtn = document.querySelector(`#pause`)
let playOrPauseBtn = document.querySelector(`#playOrPause`)
let isAudioPlaying = false //using this boolean state helps us define a toggle


//A function that plays the audio clip
let playTheAudio = function(){
    //IDEALLY receive any audio and apply audio.play method on it for now we are doing it with dove
    doveCallAudio.play()
}


//A function that pauses the audio clip
let pauseTheAudio = function(){
    doveCallAudio.pause()
}


//A function that can play or pause an audio clip depending on its status
let playOrPauseTheAudio = function() {
    if (isAudioPlaying === false) {
        doveCallAudio.play()
        isAudioPlaying = true
    }
    else{
        doveCallAudio.pause()
        isAudioPlaying = false
    }
}


playBtn.addEventListener(`click`,playTheAudio)
pauseBtn.addEventListener(`click`,pauseTheAudio)
playOrPauseBtn.addEventListener(`click`,playOrPauseTheAudio)


//audio.play    | play
//audio.load    | reset
//aduio.pause   | pause


// We can use toggle for the UI - from play to pause as one button | what does a toggle ask us? - if we have dont have this class add it, if we have it remove
