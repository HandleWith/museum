const exploreSlider = document.querySelector('.slider')
const imgBefore = document.querySelector('.img__before')
const sliderContainer = document.querySelector('.explore__img')

exploreSlider.addEventListener('mousedown', slideReady)
window.addEventListener('touchstop', slideFinish)
window.addEventListener('mouseup', slideFinish)
sliderContainer.addEventListener('click', getCursorPos)

let clicked = 0
let w = sliderContainer.offsetWidth
imgBefore.style.width = `${w/2}px`
exploreSlider.style.left =`${w/2 - 19.5}px`

function slideReady(e) {
    e.preventDefault()
    clicked = 1
    window.addEventListener('mousemove', slideMove)
    window.addEventListener('touchmove', slideMove)
}

function slideFinish() {
    clicked = 0
}

function getCursorPos(e) {
    let a = sliderContainer.getBoundingClientRect()
    x = e.pageX - a.left
    x = x - window.pageXOffset;
    return x
}

function slide(x) {
    imgBefore.style.width = `${x}px`
    exploreSlider.style.left = `${imgBefore.offsetWidth - (exploreSlider.offsetWidth / 2)}px`
}

function slideMove(e) {
    let pos = getCursorPos(e)
    if(clicked == 0) {
        return false
    }
    if (pos < 0) {
        pos = 0
    }
    if (pos > w) {
        pos = w
    }
    slide(pos)
}

