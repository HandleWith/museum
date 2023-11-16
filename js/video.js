const videoPlayer = document.querySelector('.video')
const video = videoPlayer.querySelector('.video__watch')
const poster = videoPlayer.querySelector('.poster')
const progress = videoPlayer.querySelector('.video__toolbar')
const progressBars = videoPlayer.querySelectorAll('.-progress')
const progressBar = videoPlayer.querySelector('.progress__bar__input')
const volumeBar = videoPlayer.querySelector('.sound__volume')
const start = videoPlayer.querySelector('.play')
const clickToPlay = videoPlayer.querySelector('.click__to__play')
const skipForward = videoPlayer.querySelector('.skip__forward')
const skipBack = videoPlayer.querySelector('.skip__back')
const skipButtons = videoPlayer.querySelectorAll('[data-skip]')
const manageTools = videoPlayer.querySelector('.play__skip')
const volumeBtn = videoPlayer.querySelector('.sound__img')
const fullscreenBtn = videoPlayer.querySelector('.full__screen__enter')
const playPausebutton = manageTools.children[0]
const playRate = document.querySelector('.play__back__rate')
const playRateText = document.querySelector('.play__back__text')
const videoBackDisplay = document.querySelector('.rewind__back')
const videoFowardDisplay = document.querySelector('.rewind__foward')

function startPlay() {
    video.play()
    clickToPlay.classList.remove('click__to__play')
}

function showBtn() {
    clickToPlay.classList.add('click__to__play')
}

function playPause() {
    if(video.paused) {
        video.play() 
        clickToPlay.classList.remove('click__to__play')
    } 
    else {
        video.pause()
        clickToPlay.classList.add('click__to__play')
    }
}

function updateButton() {
    if(this.paused) {
        playPausebutton.classList.remove('pause')
        playPausebutton.classList.add('play')
    }
    else if(this.play) {
        playPausebutton.classList.add('pause')
        playPausebutton.classList.remove('play')
    }
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

function updateRange() {
    video[this.name] = (this.value/100)
}

function handleProgress() {
    progressBar.value = (video.currentTime / video.duration) * 100
}

function scrub(e) {
    const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration
    video.currentTime = scrubTime
}

function volumeOff() {
    if(!video.muted) {
        video.muted = true
        volumeBtn.classList.add('mute__img')
        volumeBtn.classList.remove('volume__img')
    } 
    else if(video.muted) {
        video.muted = false
        volumeBtn.classList.add('volume__img')
        volumeBtn.classList.remove('mute__img')
    }
}

function fullscreen() {
    if(videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen()
        progressBar.style.width = '100%'
        //manageTools.style.width = '200px'
        fullscreenBtn.classList.add('full__screen__exit')
        fullscreenBtn.classList.remove('full__screen__enter')
    }
    if(document.fullscreenElement) {
        document.exitFullscreen()
        progressBar.style.width = '100%'
        //manageTools.style.width = '159px'
        fullscreenBtn.classList.add('full__screen__enter')
        fullscreenBtn.classList.remove('full__screen__exit')
    }
}

function numberScrub(e) {
    const number = e.code.match(/[0-9]/)
    const digit = e.code.match(/Digit/)
    const numpad = e.code.match(/Numpad/)
    if(number !== null) {
        if(digit !== null || numpad !== null) {
            const scrub = (video.duration * number) / 10
            video.currentTime = scrub
        }
    } 
}

function framecaption(e) {
    if(e.code === 'BracketRight' && video.paused) {
        video.currentTime += 0.04
    }
    else if(e.code === 'BracketLeft' && video.paused) {
        video.currentTime -= 0.04
    }
}

function hotKeys(e) {
    if(e.code === 'Space') {
        e.preventDefault()
        playPause()
    }
    if(e.code === 'KeyF') {
        fullscreen()
    }
    else if(e.code === 'KeyM') {
        volumeOff()
    }
    else if(e.code === 'Comma' && e.shiftKey) {
        if(video.playbackRate == 2)
            video.playbackRate = 1.75
        else if(video.playbackRate == 1.75) 
            video.playbackRate = 1.5
        else if(video.playbackRate == 1.5) 
            video.playbackRate = 1
        else if(video.playbackRate == 1)
            video.playbackRate = 0.75
        else if(video.playbackRate == 0.75)
            video.playbackRate = 0.5
        else if(video.playbackRate == 0.5)
            video.playbackRate = 0.25

            playRateText.innerHTML = `${video.playbackRate}x`
            playRate.style.opacity = '.5'

        setTimeout(function() {
            playRate.style.opacity = '0'
        }, 300)
        
    }
    else if(e.code === 'Period' && e.shiftKey) {
        if(video.playbackRate == 0.25)
            video.playbackRate = 0.5
        else if(video.playbackRate == 0.5) 
            video.playbackRate = 0.75
        else if(video.playbackRate == 0.75)
            video.playbackRate = 1
        else if(video.playbackRate == 1)
            video.playbackRate = 1.5
        else if(video.playbackRate == 1.5)
            video.playbackRate = 1.75
        else if(video.playbackRate == 1.75)
            video.playbackRate = 2

            playRateText.innerHTML = `${video.playbackRate}x`
            playRate.style.opacity = '.5'

        setTimeout(function() {
            playRate.style.opacity = '0'
        }, 300)
        
    }
    else if(e.code === 'ArrowRight') {
        video.currentTime += 5
        videoFowardDisplay.style.opacity = '.5'
        setTimeout(function() {
            videoFowardDisplay.style.opacity = '0'
        }, 300)
    }
    else if(e.code === 'ArrowLeft') {
        video.currentTime -= 5
        videoBackDisplay.style.opacity = '.5'
        setTimeout(function() {
            videoBackDisplay.style.opacity = '0'
        }, 300)
    }
    numberScrub(e)
    framecaption(e)
}

function updateColor() {
    const persent = (video.currentTime / video.duration) * 100
    progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${persent}%, #fff ${persent}%, white 100%)`
}

function updateColor1() {
    const value = this.value
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
}

function updateColor2() {
    const value  = volumeBar.value
    volumeBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
}

function dellBtn() {
    clickToPlay.classList.remove('click__to__play')
}

video.addEventListener('click', playPause)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('ended', showBtn)
video.addEventListener('play', dellBtn)

clickToPlay.addEventListener('click', startPlay)

start.addEventListener('click', playPause)
skipButtons.forEach(button => button.addEventListener('click', skip))

progressBars.forEach(range => range.addEventListener('change', updateRange))
progressBars.forEach(range => range.addEventListener('mousemove', updateRange))
progressBars.forEach(range => range.addEventListener('input', updateColor1))

video.addEventListener('timeupdate', handleProgress)
video.addEventListener('timeupdate', updateColor)
video.addEventListener('volumechange', updateColor2)
video.addEventListener('volumechange', function() {
    if(video.volume === 0) {
        volumeBtn.classList.add('mute__img')
        volumeBtn.classList.remove('volume__img')
    }
    else if(!video.muted) {
        volumeBtn.classList.remove('mute__img')
        volumeBtn.classList.add('volume__img')
    }
})

let mousedown = false
progressBar.addEventListener('click', scrub)
progressBar.addEventListener('mousemove', (e) => mousedown && scrub(e))
progressBar.addEventListener('mousedown', () => mousedown = true)
progressBar.addEventListener('mouseup', () => mousedown = false)

volumeBtn.addEventListener('click', volumeOff)
fullscreenBtn.addEventListener('click', fullscreen)

video.addEventListener('click', addHot)
start.addEventListener('click', addHot)
clickToPlay.addEventListener('click', addHot)
video.addEventListener('ended', removeHot)


function addHot() {
    window.addEventListener('keydown', hotKeys)
}

function removeHot() {
    window.removeEventListener('keydown', hotKeys)
}

