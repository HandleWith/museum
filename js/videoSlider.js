$(document).ready(function(){
    $('.video__slider').slick({
        arrows:true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
    })
    const slickdots = document.querySelector('.slick-dots').childNodes
    const currentVideo = document.querySelector('.video__watch')
    const prevNext = document.querySelectorAll('.slick-arrow')
    const videoIframeslide = document.querySelectorAll('.video__iframe')
    const slideOverlay = document.querySelectorAll('.video__slider')
    const slickPrev = document.querySelectorAll('.slick-prev')
    
    function changeVideo(e) {
        let x = e.target.id.match(/\d/g)[1]
        applyChange(x)
    }

    function applyChange(x) {
        clickToPlay.classList.add('click__to__play')
        currentVideo.src = `./assets/video/video${x}.mp4`
        currentVideo.poster = `./assets/video/poster${x}.jpg`
        video.currentTime = 0
        progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${0}%, #fff ${0}%, white 100%)`
        playPausebutton.classList.remove('pause')
        playPausebutton.classList.add('play')
    }

    function changeVideo2() {
        let x = []
        for(let i=0; i<slickdots.length; i++) {
            if(slickdots[i].className === 'slick-active') {
                x.push(slickdots[i].childNodes[0].id.match(/\d/g)[1])
            }
        }
        applyChange(x)
    }

    slickdots.forEach(el => el.addEventListener('click', changeVideo))
    prevNext.forEach(el => el.addEventListener('click', changeVideo2))
    
});


