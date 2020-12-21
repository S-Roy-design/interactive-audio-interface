
let doveCallAudio = document.querySelector(`#doveAudio`)
let duckCallAudio = document.querySelector(`#duckAudio`)
//let audio = new Audio(`audiofilelinkfromtheweb`) but this is not as accessible
// let audio = new Audio(`https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-free-to-use-sounds/ftus_animals_birds_seagulls_early_morning_sunrise_ocean_waves_caribbean.mp3?_=1`)

// let playBtn = document.querySelector(`#play`)
// let pauseBtn = document.querySelector(`#pause`)

let playOrPauseBtnDove = document.querySelector(`#playOrPauseDove`)
let playOrPauseBtnDuck = document.querySelector(`#playOrPauseDuck`)

let isDoveAudioPlaying = false
let isDuckAudioPlaying = false //using this boolean state helps us define a toggle

// //A function that plays the audio clip
// let playTheAudio = function(){
//     //IDEALLY receive any audio and apply audio.play method on it for now we are doing it with dove
//     doveCallAudio.play()
// }


// //A function that pauses the audio clip
// let pauseTheAudio = function(){
//     doveCallAudio.pause()
// }


//A function that can play or pause an audio clip depending on its status
let playOrPauseDoveAudio = function() {
    if (isDoveAudioPlaying === false) {
        doveCallAudio.volume = masterVolumeValue
        doveCallAudio.play()
        notesCollected.push(doveCallAudio)
        isDoveAudioPlaying = true
    }
    else{
        doveCallAudio.volume = masterVolumeValue
        doveCallAudio.pause()
        isDoveAudioPlaying = false
    }
}

let playOrPauseDuckAudio = function() {
    if (isDuckAudioPlaying === false) {
        duckCallAudio.volume = masterVolumeValue
        duckCallAudio.play()
        notesCollected.push(doveCallAudio)
        isDuckAudioPlaying = true
    }
    else{
        duckCallAudio.volume = masterVolumeValue
        duckCallAudio.pause()
        isDuckAudioPlaying = false
    }
}

// playBtn.addEventListener(`click`,playTheAudio)
// pauseBtn.addEventListener(`click`,pauseTheAudio)
playOrPauseBtnDove.addEventListener(`click`,playOrPauseDoveAudio)
playOrPauseBtnDuck.addEventListener(`click`,playOrPauseDuckAudio)



//audio.play    | play
//audio.load    | reset
//aduio.pause   | pause


// We can use toggle for the UI - from play to pause as one button | what does a toggle ask us? - if we have dont have this class add it, if we have it remove



//

let playSongBtn = document.querySelector(`#playSong`)
let resetBtn = document.querySelector(`#resetNotes`)
let songVolume = document.querySelector(`#volumeControl`)

let notesCollected = []
let masterVolumeValue = 0.5




let playNotesCollected = function() {
    let index = 0
    let speedControl = document.querySelector(`#speedControlSong`).value // .value allows us to take the value from user and put it the variable
    let playSingleNote = function() {
        let note = notesCollected[index]

        note.volume = masterVolumeValue
        note.play()
        index = index + 1 //after playing that, it keeps count of it and can move to the next index

        if (index < notesCollected.length) {
            setTimeout(playSingleNote, speedControl) //call the function playSingleNote again, with a delay of 1.5s 
        }
    }
    setTimeout(playSingleNote, 1000)

    // notesCollected.forEach(playSingleNote) | ^ in the above wrote a manual loop where we could adjust the timing
}




let resetNotes = function() {
    notesCollected = []
}



let updateVolume = function() {
    masterVolumeValue = songVolume.value
}

playSongBtn.addEventListener(`click`, playNotesCollected)
resetBtn.addEventListener(`click`, resetNotes)
songVolume.addEventListener(`change`,updateVolume)